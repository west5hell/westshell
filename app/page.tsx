"use client";

import { useEffect, useMemo, useState } from "react";

function getYearProgress(now: Date) {
  const year = now.getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);
  const elapsed = now.getTime() - start.getTime();
  const duration = end.getTime() - start.getTime();

  return {
    year,
    day: Math.floor(elapsed / 86_400_000) + 1,
    daysInYear: Math.round(duration / 86_400_000),
    percent: Math.min(100, Math.max(0, (elapsed / duration) * 100)),
  };
}

export default function Home() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  const progress = useMemo(() => (now ? getYearProgress(now) : null), [now]);
  const percent = progress ? progress.percent : 0;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <main className="w-full max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground/55">
          {progress ? progress.year : "This year"}
        </p>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold sm:text-5xl">Year Progress</h1>
          <p className="font-mono text-3xl font-semibold tabular-nums sm:text-5xl">
            {progress ? `${percent.toFixed(2)}%` : "--.--%"}
          </p>
        </div>
        <div
          aria-label="Year progress"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={Number(percent.toFixed(2))}
          className="h-4 overflow-hidden rounded-full bg-foreground/10"
          role="progressbar"
        >
          <div
            className="h-full rounded-full bg-foreground transition-[width] duration-700 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-4 flex flex-wrap justify-between gap-2 text-sm text-foreground/60">
          <span>
            {progress
              ? `Day ${progress.day} of ${progress.daysInYear}`
              : "Calculating"}
          </span>
          <span>{progress ? "Updates every minute" : ""}</span>
        </div>
      </main>
    </div>
  );
}
