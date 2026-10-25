import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

// Every page is prerendered, so the build output is the whole cache.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
