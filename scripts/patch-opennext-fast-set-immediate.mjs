import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const handlerPath = new URL(
  "../.open-next/server-functions/default/handler.mjs",
  import.meta.url
);

function patchHandler(source) {
  // This is the exact minified-ish sequence emitted into the OpenNext handler for Next 16.x.
  // In Cloudflare Workers nodejs_compat, `require('node:timers')` may return a read-only
  // Module namespace object, so `nodeTimers.setImmediate = ...` throws.
  const needle =
    'let nodeTimers=require("node:timers");globalThis.setImmediate=nodeTimers.setImmediate=patchedSetImmediate,globalThis.clearImmediate=nodeTimers.clearImmediate=patchedClearImmediate;let nodeTimersPromises=require("node:timers/promises");nodeTimersPromises.setImmediate=patchedSetImmediatePromise,process.nextTick=patchedNextTick';

  if (!source.includes(needle)) {
    return { changed: false, reason: "pattern not found" };
  }

  const replacement =
    'let nodeTimers=require("node:timers");globalThis.setImmediate=patchedSetImmediate,globalThis.clearImmediate=patchedClearImmediate;try{nodeTimers.setImmediate=patchedSetImmediate,nodeTimers.clearImmediate=patchedClearImmediate}catch{}let nodeTimersPromises=require("node:timers/promises");try{nodeTimersPromises.setImmediate=patchedSetImmediatePromise}catch{}process.nextTick=patchedNextTick';

  return { changed: true, source: source.replace(needle, replacement) };
}

async function main() {
  if (!existsSync(handlerPath)) {
    console.log(
      "patch-opennext-fast-set-immediate: handler not found, skipping"
    );
    return;
  }

  const original = await readFile(handlerPath, "utf8");
  const result = patchHandler(original);

  if (!result.changed) {
    console.log(
      `patch-opennext-fast-set-immediate: no change (${result.reason})`
    );
    return;
  }

  await writeFile(handlerPath, result.source, "utf8");
  console.log(
    "patch-opennext-fast-set-immediate: patched .open-next handler successfully"
  );
}

await main();
