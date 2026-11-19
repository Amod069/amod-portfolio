"use client";

import { useEffect, useRef } from "react";

/**
 * An illustrated Amod, drawn from his own photos: swept-up wavy hair with flyaways,
 * large clear rectangular glasses, a light moustache, an olive tee and an earbud.
 * Waves once on load (and on hover), blinks, and his eyes and head follow the cursor.
 * The whole figure is a button that opens the CV chat.
 * Reduced motion: no wave, no blink, no follow; the drawing stays as it is.
 */
export default function Character({ onAsk }: { onAsk: () => void }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pupilsRef = useRef<SVGGElement>(null);
  const headRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    const update = () => {
      raf = 0;
      const svg = svgRef.current;
      if (!svg) return;
      const r = svg.getBoundingClientRect();
      // eye line sits at about 43% of the drawing's height
      const cx = r.left + r.width * 0.5;
      const cy = r.top + r.height * 0.43;
      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(1, dist / 400);
      const ex = (dx / dist) * 3.2 * reach;
      const ey = (dy / dist) * 2.4 * reach;
      pupilsRef.current?.setAttribute("transform", `translate(${ex.toFixed(2)} ${ey.toFixed(2)})`);
      const tilt = Math.max(-4, Math.min(4, (dx / Math.max(window.innerWidth, 1)) * 10));
      if (headRef.current) headRef.current.style.transform = `rotate(${tilt.toFixed(2)}deg)`;
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onAsk}
      className="char group relative block w-full cursor-pointer rounded-[var(--radius-card)] focus-visible:outline-offset-4"
      aria-label="Illustration of Amod waving. Open the chat to ask about his work."
    >
      <svg ref={svgRef} viewBox="0 0 400 480" className="h-auto w-full" role="img" aria-hidden="true">
        {/* backdrop */}
        <circle className="c-disc" cx="200" cy="250" r="185" />

        {/* waving forearm, behind the body edge */}
        <g className="char-hand">
          <path className="c-skin" d="M318 480 C 322 440, 334 392, 344 336 L 366 340 C 362 392, 356 440, 356 480 Z" />
          {/* sleeve cuff */}
          <path className="c-tee" d="M312 480 C 314 462, 318 446, 322 432 L 362 440 C 360 452, 358 466, 358 480 Z" />
          {/* palm and fingers */}
          <g>
            <ellipse className="c-skin" cx="356" cy="318" rx="24" ry="27" />
            <rect className="c-skin" x="334" y="262" width="11" height="44" rx="5.5" transform="rotate(-12 339 284)" />
            <rect className="c-skin" x="346" y="252" width="11.5" height="50" rx="5.75" transform="rotate(-4 352 277)" />
            <rect className="c-skin" x="359" y="254" width="11.5" height="48" rx="5.75" transform="rotate(5 365 278)" />
            <rect className="c-skin" x="371" y="266" width="10.5" height="40" rx="5.25" transform="rotate(14 376 286)" />
            <rect className="c-skin" x="320" y="300" width="28" height="11" rx="5.5" transform="rotate(-38 334 305)" />
            <path className="c-shade-line" strokeWidth="2" strokeLinecap="round" d="M346 326 Q 356 332 368 326" />
          </g>
        </g>

        {/* body: static */}
        <path className="c-skin-shade" d="M172 282 L 228 282 L 236 352 Q 200 384 164 352 Z" />
        <path className="c-tee" d="M22 480 C 30 404, 84 364, 158 346 Q 200 378 242 346 C 316 364, 370 404, 378 480 Z" />
        <path className="c-tee-line" strokeWidth="5" strokeLinecap="round" d="M158 347 Q 200 382 242 347" />
        <path className="c-tee-line" strokeWidth="2" strokeLinecap="round" d="M96 392 C 108 420, 112 450, 110 480" opacity="0.6" />
        <path className="c-tee-line" strokeWidth="2" strokeLinecap="round" d="M304 392 C 292 420, 288 450, 290 480" opacity="0.6" />

        {/* head: tilts toward the cursor */}
        <g ref={headRef} className="char-head">
          {/* ears */}
          <ellipse className="c-skin" cx="127" cy="212" rx="13" ry="22" />
          <ellipse className="c-skin" cx="273" cy="212" rx="13" ry="22" />
          <path className="c-shade-line" strokeWidth="2.5" strokeLinecap="round" d="M130 201 Q 123 212 130 225" />
          <path className="c-shade-line" strokeWidth="2.5" strokeLinecap="round" d="M270 201 Q 277 212 270 225" />
          <ellipse className="c-earbud" cx="274" cy="217" rx="6.5" ry="7.5" />

          {/* face: full cheeks, soft jaw */}
          <path
            className="c-skin"
            d="M128 196 C 128 140, 162 106, 200 106 C 238 106, 272 140, 272 196 C 274 250, 250 296, 200 298 C 150 296, 126 250, 128 196 Z"
          />
          <path className="c-skin-shade" opacity="0.3" d="M136 234 C 144 272, 168 294, 200 296 C 174 288, 154 266, 146 236 Z" />
          <path className="c-skin-shade" opacity="0.3" d="M264 234 C 256 272, 232 294, 200 296 C 226 288, 246 266, 254 236 Z" />

          {/* hair: short faded sides */}
          <path className="c-hair" opacity="0.85" d="M129 196 C 126 178, 128 162, 136 150 L 142 158 C 137 170, 135 184, 135 198 Z" />
          <path className="c-hair" opacity="0.85" d="M271 196 C 274 178, 272 162, 264 150 L 258 158 C 263 170, 265 184, 265 198 Z" />
          {/* hair: tall, textured, peaking left of centre and swept across the front */}
          <path
            className="c-hair"
            d="M134 172 C 122 146, 124 116, 138 98 Q 140 74 166 64 Q 176 38 208 40 Q 230 20 258 38 Q 284 42 290 68 Q 304 90 291 116 Q 293 140 279 158 Q 276 164 272 168 C 268 150, 258 136, 244 128 Q 224 138 206 128 Q 186 120 168 130 Q 152 138 144 154 Q 138 162 134 172 Z"
          />
          <path className="c-hair" d="M146 156 Q 154 120 194 110 Q 226 104 246 124 Q 218 116 194 126 Q 168 136 146 156 Z" />
          <g className="c-hair-hi" strokeLinecap="round" fill="none">
            <path strokeWidth="2.6" d="M152 100 q 10 -14 26 -10 q 12 4 22 -8" />
            <path strokeWidth="2.6" d="M206 62 q 14 -12 30 -6 q 10 4 20 -4" />
            <path strokeWidth="2.6" d="M240 96 q 14 -8 26 0 q 8 6 18 2" />
            <path strokeWidth="2.2" d="M168 128 q 16 -12 34 -8 q 14 3 24 -2" />
          </g>
          {/* a few short flyaways */}
          <g className="c-hair-line" strokeLinecap="round" opacity="0.6">
            <path strokeWidth="1.3" d="M176 46 Q 170 36 162 33" />
            <path strokeWidth="1.3" d="M222 30 Q 226 20 234 16" />
            <path strokeWidth="1.3" d="M268 44 Q 276 36 286 35" />
            <path strokeWidth="1.3" d="M296 84 Q 306 80 312 82" />
            <path strokeWidth="1.3" d="M134 100 Q 124 94 116 96" />
          </g>

          {/* eyebrows */}
          <path className="c-hair-line" strokeWidth="5" strokeLinecap="round" d="M156 178 Q 172 171 188 175" />
          <path className="c-hair-line" strokeWidth="5" strokeLinecap="round" d="M212 175 Q 228 171 244 178" />

          {/* eyes */}
          <g className="char-eyes">
            <ellipse className="c-white" cx="172" cy="205" rx="9" ry="5.5" />
            <ellipse className="c-white" cx="228" cy="205" rx="9" ry="5.5" />
            <g ref={pupilsRef} className="char-pupils">
              <circle className="c-iris" cx="172" cy="205.5" r="4.4" />
              <circle className="c-iris" cx="228" cy="205.5" r="4.4" />
              <circle className="c-white" cx="173.4" cy="204.2" r="1.2" />
              <circle className="c-white" cx="229.4" cy="204.2" r="1.2" />
            </g>
            <path className="c-shade-line" strokeWidth="2.6" strokeLinecap="round" d="M162 202 Q 172 197 182 202" />
            <path className="c-shade-line" strokeWidth="2.6" strokeLinecap="round" d="M218 202 Q 228 197 238 202" />
          </g>

          {/* glasses: large, clear, rectangular */}
          <g className="c-frame" strokeWidth="3" strokeLinejoin="round" strokeOpacity="0.95">
            <rect className="c-lens" x="143" y="184" width="54" height="44" rx="8" />
            <rect className="c-lens" x="203" y="184" width="54" height="44" rx="8" />
            <path fill="none" d="M197 196 Q 200 192 203 196" />
            <path fill="none" strokeWidth="2.4" d="M143 193 L 126 197" />
            <path fill="none" strokeWidth="2.4" d="M257 193 L 274 197" />
          </g>
          <path className="c-glint" strokeWidth="2" strokeLinecap="round" d="M151 220 L 160 194" />
          <path className="c-glint" strokeWidth="2" strokeLinecap="round" d="M211 220 L 220 194" />

          {/* nose */}
          <path className="c-shade-line" strokeWidth="2.8" strokeLinecap="round" d="M199 212 C 196 228, 191 238, 194 244 Q 200 248 207 244" />

          {/* light moustache and a trace of stubble */}
          <path className="c-hair" opacity="0.55" d="M183 260 Q 191 256 200 258.5 Q 209 256 217 260 Q 209 259 200 260 Q 191 259 183 260 Z" />
          <path className="c-hair" opacity="0.1" d="M164 268 C 172 290, 186 297, 200 297 C 214 297, 228 290, 236 268 C 226 284, 214 290, 200 290 C 186 290, 174 284, 164 268 Z" />

          {/* a small, easy smile */}
          <path className="c-lip" strokeWidth="3.4" strokeLinecap="round" d="M183 268 Q 200 286 217 268" />
          <path className="c-shade-line" strokeWidth="2" strokeLinecap="round" opacity="0.6" d="M180 266 Q 182 268 184 267" />
          <path className="c-shade-line" strokeWidth="2" strokeLinecap="round" opacity="0.6" d="M220 266 Q 218 268 216 267" />
        </g>
      </svg>
    </button>
  );
}
