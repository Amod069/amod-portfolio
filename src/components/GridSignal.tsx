"use client";

import { useEffect, useRef } from "react";

/**
 * Animated canvas inspired by the Irish-grid carbon project:
 * a wind-generation signal (teal) and the inverse CO₂-intensity curve (amber),
 * drawing themselves across a week of hours. The cursor adds local "wind".
 * Respects prefers-reduced-motion by drawing a single static frame.
 */
export default function GridSignal() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const HOURS = 24 * 7;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let t0 = performance.now();
    const mouse = { x: -1, y: -1, active: false };

    // Deterministic pseudo-random wind series with daily rhythm and weather fronts.
    const base: number[] = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    let front = 0.5;
    for (let h = 0; h < HOURS; h++) {
      if (h % 31 === 0) front = 0.25 + rnd() * 0.6;
      const daily = 0.12 * Math.sin(((h % 24) / 24) * Math.PI * 2 - 1.2);
      const noise = (rnd() - 0.5) * 0.12;
      base.push(Math.min(1, Math.max(0.05, front + daily + noise)));
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const windAt = (h: number, time: number) => {
      let w = base[h];
      // slow drift so the signal is never frozen
      w += 0.05 * Math.sin(time / 4000 + h / 9);
      if (mouse.active) {
        const x = (h / (HOURS - 1)) * width;
        const d = Math.abs(x - mouse.x);
        const lift = Math.max(0, 1 - d / 140) * 0.35 * (1 - mouse.y / height);
        w += lift;
      }
      return Math.min(1, Math.max(0.03, w));
    };

    const draw = (now: number) => {
      const elapsed = now - t0;
      const progress = reduce ? 1 : Math.min(1, elapsed / 2600);
      const eased = 1 - Math.pow(1 - progress, 3);
      const visibleHours = Math.max(2, Math.floor(HOURS * eased));

      ctx.clearRect(0, 0, width, height);

      // faint hour grid: one line per day
      ctx.strokeStyle = "rgba(138,148,168,0.12)";
      ctx.lineWidth = 1;
      for (let d = 0; d <= 7; d++) {
        const x = (d / 7) * width;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      const top = height * 0.18;
      const bottom = height * 0.92;
      const yFor = (v: number) => bottom - v * (bottom - top);

      // wind area (teal)
      ctx.beginPath();
      for (let h = 0; h < visibleHours; h++) {
        const x = (h / (HOURS - 1)) * width;
        const y = yFor(windAt(h, now));
        if (h === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const lastX = ((visibleHours - 1) / (HOURS - 1)) * width;
      ctx.lineTo(lastX, bottom);
      ctx.lineTo(0, bottom);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, top, 0, bottom);
      grad.addColorStop(0, "rgba(62,214,193,0.28)");
      grad.addColorStop(1, "rgba(62,214,193,0.0)");
      ctx.fillStyle = grad;
      ctx.fill();

      // wind line
      ctx.beginPath();
      for (let h = 0; h < visibleHours; h++) {
        const x = (h / (HOURS - 1)) * width;
        const y = yFor(windAt(h, now));
        if (h === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(62,214,193,0.9)";
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // CO₂ intensity line (amber), inverse of wind with lag
      ctx.beginPath();
      for (let h = 0; h < visibleHours; h++) {
        const x = (h / (HOURS - 1)) * width;
        const lag = Math.max(0, h - 2);
        const co2 = 1 - windAt(lag, now) * 0.85;
        const y = yFor(co2 * 0.75 + 0.05);
        if (h === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(255,181,71,0.85)";
      ctx.lineWidth = 1.6;
      ctx.setLineDash([]);
      ctx.stroke();

      // "now" marker at the drawing head
      if (progress < 1) {
        const hx = lastX;
        ctx.fillStyle = "rgba(232,236,244,0.9)";
        ctx.beginPath();
        ctx.arc(hx, yFor(windAt(visibleHours - 1, now)), 3, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    resize();
    t0 = performance.now();
    draw(t0);
    window.addEventListener("resize", resize);
    canvas.parentElement?.addEventListener("pointermove", onMove);
    canvas.parentElement?.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("pointermove", onMove);
      canvas.parentElement?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
