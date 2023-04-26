/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import manifest from './fresh.gen.ts';
import { start } from '$fresh/server.ts';
import twindConfig from './twind.config.ts';
import twindPlugin from '$fresh/plugins/twind.ts';

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
