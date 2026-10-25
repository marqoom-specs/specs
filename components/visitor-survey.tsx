'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { bookingUrl, interested, questions } from '@/lib/visitor-survey';

const STORE = 'marqoom-visitor';
const VISIT = 'marqoom-visit';
// Set for the rest of the visit after a dismissal, so the questions wait in the corner as a pill.
const PILL = 'marqoom-visit-pill';
const OPEN = 'marqoom:visitor-survey';
const QUIET_DAYS = 30;
// Seconds on the site before asking, counted across pages while the tab is visible.
const DELAY_SECONDS = 8;

type Answers = { role?: string; data: string[]; intent?: string };
type Stored = { status: 'answered' | 'dismissed'; at: number; id?: string; intent?: string };
type Progress = { id: string; step: number; answers: Answers };

function read<T>(storage: Storage, key: string): T | null {
  try {
    return JSON.parse(storage.getItem(key) ?? 'null');
  } catch {
    return null;
  }
}

function remember(stored: Stored) {
  try {
    localStorage.setItem(STORE, JSON.stringify(stored));
  } catch {}
}

// Answered once is enough; a dismissal is respected for a month.
function settled(stored: Stored | null) {
  return !!stored && (stored.status === 'answered' || Date.now() - stored.at < QUIET_DAYS * 864e5);
}

// Opens the questions on request, wherever the reader is: for example from the overview's "Working on a Quran project?" band.
export function SurveyButton({ className, children }: { className?: string; children: ReactNode }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN))}>{children}</button>;
}

export function VisitorSurvey({ lang }: { lang: string }) {
  const ar = lang === 'ar';
  const [view, setView] = useState<'hidden' | 'open' | 'pill'>('hidden');
  const [focusPill, setFocusPill] = useState(false);
  // Opened by the reader (the band or the pill) rather than by the timer.
  const [requested, setRequested] = useState(false);
  // Kept between openings, so the questions continue where the reader left them.
  const [progress, setProgress] = useState<Progress | null>(null);
  const asked = useRef(false);

  useEffect(() => {
    let stored: Stored | null = null;
    try {
      stored = read<Stored>(localStorage, STORE);
      const saved = stored?.status === 'answered' ? null : read<Omit<Progress, 'id'>>(sessionStorage, PILL);
      // The questions only wait as a pill while some are left; a finished set never comes back as one.
      const pill = saved && typeof saved === 'object' && saved.step < questions.length ? saved : null;
      // A visitor who answered sees the last step again; anyone else keeps the same record.
      setProgress({
        id: stored?.id ?? crypto.randomUUID(),
        step: pill?.step ?? (stored?.status === 'answered' ? questions.length : 0),
        answers: pill?.answers ?? { data: [], intent: stored?.intent },
      });
      if (pill) {
        asked.current = true;
        setView('pill');
      }
    } catch {
      return;
    }
    const open = (event?: Event) => {
      asked.current = true;
      setRequested(!!event);
      setFocusPill(false);
      setView('open');
    };
    window.addEventListener(OPEN, open);
    // `?survey` opens it at once, for checking the flow.
    const forced = new URLSearchParams(location.search).has('survey');
    if (asked.current || (!forced && settled(stored))) return () => window.removeEventListener(OPEN, open);
    const visit = read<unknown>(sessionStorage, VISIT);
    let seconds = typeof visit === 'number' ? visit : 0;
    // Wait while search, the mobile menu or a text field has the reader's attention.
    const busy = () =>
      document.body.hasAttribute('data-scroll-locked') ||
      document.querySelector('[role="dialog"]') !== null ||
      document.activeElement?.matches('input, textarea, [contenteditable="true"]');
    const timer = setInterval(() => {
      if (asked.current) return clearInterval(timer);
      if (document.visibilityState !== 'visible') return;
      seconds += 1;
      sessionStorage.setItem(VISIT, String(seconds));
      if ((forced || seconds >= DELAY_SECONDS) && !busy()) open();
    }, 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener(OPEN, open);
    };
  }, []);

  if (!progress) return null;
  if (view === 'open') {
    return <Survey
      ar={ar}
      progress={progress}
      requested={requested}
      onDone={(latest, answered, hadFocus) => {
        // Dismissed without answering: the card becomes a pill in the same corner for the rest of the visit.
        try {
          if (answered) sessionStorage.removeItem(PILL);
          else sessionStorage.setItem(PILL, JSON.stringify({ step: latest.step, answers: latest.answers }));
        } catch {}
        setProgress(latest);
        setFocusPill(!answered && hadFocus);
        setView(answered ? 'hidden' : 'pill');
      }}
    />;
  }
  if (view !== 'pill') return null;
  return (
    <div className="vs-pill" role="group" aria-label={ar ? 'أسئلة للزوار' : 'Visitor questions'}>
      <button type="button" className="vs-pill-open" autoFocus={focusPill} onClick={() => window.dispatchEvent(new Event(OPEN))}>
        <span className="vs-progress" aria-hidden="true">
          {questions.map((item, index) => <span key={item.key} data-state={index < progress.step ? 'done' : index === progress.step ? 'current' : undefined} />)}
        </span>
        {ar ? 'عرّفنا بعملك' : 'Tell us about your work'}
      </button>
      <button
        type="button"
        className="vs-close"
        aria-label={ar ? 'إخفاء' : 'Hide'}
        onClick={() => {
          try {
            sessionStorage.removeItem(PILL);
          } catch {}
          setView('hidden');
        }}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" /></svg>
      </button>
    </div>
  );
}

function Survey({ ar, progress, requested, onDone }: { ar: boolean; progress: Progress; requested: boolean; onDone: (latest: Progress, answered: boolean, hadFocus: boolean) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const titleId = useId();
  // A sheet from the bottom on phones; on wider screens a card in the corner that leaves the page readable.
  const [surface] = useState<'sheet' | 'card'>(() => (matchMedia('(max-width: 767px)').matches ? 'sheet' : 'card'));
  const id = progress.id;
  const [step, setStep] = useState(progress.step);
  const [answers, setAnswers] = useState<Answers>(progress.answers);
  const [closing, setClosing] = useState(false);
  const [drag, setDrag] = useState(0);
  const dragStart = useRef<number | null>(null);
  // Reaching the last step is answering, even for a record saved before it kept the intent.
  const answered = useRef(!!progress.answers.intent || progress.step >= questions.length);
  const number = (value: number) => (ar ? value.toLocaleString('ar-u-nu-arab') : String(value));

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (surface === 'sheet') {
      element.showModal();
      title.current?.focus();
      const root = document.documentElement;
      const overflow = root.style.overflow;
      root.style.overflow = 'hidden';
      return () => {
        element.close();
        root.style.overflow = overflow;
      };
    }
    // Asked for, the card takes focus; on its own it appears without taking focus from what the reader is doing.
    const previous = document.activeElement;
    element.show();
    if (requested) title.current?.focus({ preventScroll: true });
    else if (previous instanceof HTMLElement && previous !== document.body) previous.focus({ preventScroll: true });
    else if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    return () => element.close();
  }, [surface, requested]);

  // Each step replaces the buttons, so focus follows to the new heading.
  const shownStep = useRef(step);
  useEffect(() => {
    if (shownStep.current !== step) title.current?.focus({ preventScroll: true });
    shownStep.current = step;
  }, [step]);

  const send = (fields: Record<string, unknown>) => {
    fetch('/api/visitors', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ id, lang: ar ? 'ar' : 'en', page: location.pathname, surface, ...fields }),
    }).catch(() => {});
  };

  const close = () => {
    if (closing) return;
    if (!answered.current) remember({ status: 'dismissed', at: Date.now(), id });
    const hadFocus = surface === 'card' && !!dialog.current?.contains(document.activeElement);
    setClosing(true);
    setTimeout(() => onDone({ id, step, answers }, answered.current, hadFocus), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 240);
  };

  const question = questions[step];
  const choose = (code: string) => {
    if (question.multiple) {
      setAnswers((current) => {
        const toggled = current.data.includes(code) ? current.data.filter((item) => item !== code) : [...current.data, code];
        // "None yet" stands alone.
        return { ...current, data: code === 'none' ? toggled.filter((item) => item === 'none') : toggled.filter((item) => item !== 'none') };
      });
      return;
    }
    setAnswers((current) => ({ ...current, [question.key]: code }));
    send({ [question.key]: code });
    if (question.key === 'intent') {
      answered.current = true;
      remember({ status: 'answered', at: Date.now(), id, intent: code });
    }
    // Long enough to see the choice turn gold.
    setTimeout(() => setStep(step + 1), 220);
  };

  const done = step >= questions.length;

  return (
    <dialog
      ref={dialog}
      className="visitor-survey"
      data-surface={surface}
      data-closing={closing || undefined}
      aria-labelledby={titleId}
      dir={ar ? 'rtl' : 'ltr'}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Escape') return;
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        className="vs-panel"
        style={drag ? { transform: `translateY(${drag}px)`, transition: 'none' } : undefined}
      >
        {surface === 'sheet' && (
          <div
            className="vs-grab"
            aria-hidden="true"
            onPointerDown={(event) => {
              dragStart.current = event.clientY;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (dragStart.current !== null) setDrag(Math.max(0, event.clientY - dragStart.current));
            }}
            onPointerUp={() => {
              if (dragStart.current === null) return;
              dragStart.current = null;
              if (drag > 90) close();
              else setDrag(0);
            }}
            onPointerCancel={() => {
              dragStart.current = null;
              setDrag(0);
            }}
          />
        )}
        <div className="vs-top">
          <div className="vs-progress" aria-hidden="true">
            {questions.map((item, index) => <span key={item.key} data-state={index < step ? 'done' : index === step ? 'current' : undefined} />)}
          </div>
          {!done && <span className="vs-count">{number(step + 1)} {ar ? 'من' : 'of'} {number(questions.length)}</span>}
          <button type="button" className="vs-close" onClick={close} aria-label={ar ? 'إغلاق' : 'Close'}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" /></svg>
          </button>
        </div>
        <div key={step} className="vs-step">
          {!done ? (
            <>
              {step === 0 && (
                <>
                  <p className="vs-eyebrow">{ar ? 'نريد أن نعرفك' : "We'd like to know you"}</p>
                  <p className="vs-lead">{ar
                    ? 'نبني هذه المعايير لمن يعمل بالبيانات القرآنية. ثلاثة أسئلة سريعة.'
                    : 'We build these standards for people who work with Quranic data. Three quick questions.'}</p>
                </>
              )}
              <h2 id={titleId} ref={title} tabIndex={-1}>{ar ? question.ar : question.en}</h2>
              {question.hintEn && <p className="vs-hint">{ar ? question.hintAr : question.hintEn}</p>}
              <div className="vs-options" role="group" aria-labelledby={titleId}>
                {question.options.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    data-kind={question.multiple ? 'check' : 'radio'}
                    aria-pressed={question.multiple ? answers.data.includes(option.code) : answers[question.key] === option.code}
                    onClick={() => choose(option.code)}
                  >
                    <span className="vs-mark" aria-hidden="true" />
                    {ar ? option.ar : option.en}
                  </button>
                ))}
              </div>
              {(step > 0 || question.multiple) && <div className="vs-actions">
                {step > 0 && <button type="button" className="vs-quiet" onClick={() => setStep(step - 1)}>{ar ? 'السابق' : 'Back'}</button>}
                {question.multiple && (
                  <button
                    type="button"
                    className="vs-primary"
                    disabled={answers.data.length === 0}
                    onClick={() => {
                      send({ data: answers.data });
                      setStep(step + 1);
                    }}
                  >
                    {ar ? 'التالي' : 'Next'}
                  </button>
                )}
              </div>}
            </>
          ) : interested(answers.intent) ? (
            <>
              <h2 id={titleId} ref={title} tabIndex={-1}>{ar ? 'نودّ أن نسمع عن مشروعك' : "We'd like to hear about your project"}</h2>
              <p className="vs-lead">{ar
                ? 'إذا أردت، نلتقي ٣٠ دقيقة نتحدث فيها عن عملك، وهل تناسبه هذه المعايير.'
                : "If you'd like, we can meet for 30 minutes to talk about your work and whether these standards fit it."}</p>
              <p className="vs-note">{ar ? 'مرقوم مشروع مفتوح المصدر وغير ربحي.' : 'Marqoom is an open-source, non-profit project.'}</p>
              <div className="vs-actions" data-end>
                <button type="button" className="vs-quiet" onClick={close}>{ar ? 'ليس الآن' : 'Not now'}</button>
                <a
                  className="vs-primary"
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    send({ booking: true });
                    close();
                  }}
                >
                  {ar ? 'احجز لقاءً' : 'Book a meeting'}
                </a>
              </div>
            </>
          ) : (
            <>
              <h2 id={titleId} ref={title} tabIndex={-1}>{ar ? 'شكرًا لك' : 'Thank you'}</h2>
              <p className="vs-lead">{ar
                ? 'إجاباتك تساعدنا نعرف من يحتاج هذه المعايير، ومن أين نبدأ.'
                : 'Your answers help us see who needs these standards, and where to start.'}</p>
              <div className="vs-actions" data-end>
                <button type="button" className="vs-quiet" onClick={close}>{ar ? 'إغلاق' : 'Close'}</button>
                <Link className="vs-primary" href={ar ? '/ar/docs/terms' : '/docs/terms'} onClick={close}>{ar ? 'تعرّف على المصطلحات' : 'Read about the terminology'}</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}
