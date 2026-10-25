-- Answers from the visitor questions, one row per visitor who answered at least one.
-- No names, email addresses or IP addresses are stored.
CREATE TABLE visitor_answers (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  lang TEXT NOT NULL,
  page TEXT NOT NULL,
  -- 'sheet' on phones, 'card' on wider screens.
  surface TEXT NOT NULL,
  role TEXT,
  -- Comma-separated codes, for example 'text,audio'.
  data TEXT,
  intent TEXT,
  booking_opened INTEGER NOT NULL DEFAULT 0
);
