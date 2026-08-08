import { useEffect, useRef } from "react";

/**
 * Original 16-bit style pixel mascot: a hooded developer typing on a laptop.
 * Drawn procedurally on a canvas (no image assets) so it stays a few KB and
 * animates at a stable frame rate. Monochrome only — the ink color is read
 * from the current theme foreground.
 */

const W = 48;
const H = 38;

type Ctx = CanvasRenderingContext2D;

function makePalette(ink: string) {
  return {
    ink,
    mid: ink,
    light: ink,
  };
}

export function PixelDevMascot({ scale = 7 }: { scale?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ink = getComputedStyle(canvas).color || "#000";
    makePalette(ink);

    let raf = 0;
    let start = performance.now();

    const px = (x: number, y: number, w: number, h: number, alpha = 1) => {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = ink;
      ctx.fillRect(x * scale, y * scale, w * scale, h * scale);
      ctx.globalAlpha = 1;
    };

    const clear = (x: number, y: number, w: number, h: number) => {
      ctx.clearRect(x * scale, y * scale, w * scale, h * scale);
    };


    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // idle breathing: 0 or 1 px lift
      const breathe = Math.sin(t * 1.6) > 0.4 ? 1 : 0;
      // blink cycle
      const blinkPhase = t % 4.2;
      const blinking = blinkPhase > 3.9 || (blinkPhase > 2.0 && blinkPhase < 2.12);
      // typing: alternating hands
      const typeStep = Math.floor(t * 7) % 2;
      const cursorOn = Math.floor(t * 1.6) % 2 === 0;

      const oy = breathe;

      /* ---------- hair ---------- */
      px(19, 3 + oy, 10, 1);
      px(18, 4 + oy, 12, 2);
      px(17, 6 + oy, 14, 2, 0.9);
      px(17, 8 + oy, 2, 4, 0.9);
      px(29, 8 + oy, 2, 4, 0.9);

      /* ---------- face ---------- */
      px(19, 6 + oy, 10, 9, 0.16); // skin block
      px(19, 6 + oy, 10, 2); // fringe over forehead

      // eyes
      if (blinking) {
        px(21, 10 + oy, 2, 1);
        px(25, 10 + oy, 2, 1);
      } else {
        px(21, 9 + oy, 2, 2);
        px(25, 9 + oy, 2, 2);
      }
      // brows
      px(21, 8 + oy, 2, 1, 0.45);
      px(25, 8 + oy, 2, 1, 0.45);
      // friendly smile
      px(22, 12 + oy, 4, 1);
      px(21, 11 + oy, 1, 1, 0.55);
      px(26, 11 + oy, 1, 1, 0.55);

      // neck
      px(22, 15 + oy, 4, 2, 0.2);

      /* ---------- hoodie ---------- */
      px(15, 17 + oy, 18, 2, 0.9); // shoulders
      px(14, 19 + oy, 20, 12, 0.9); // torso
      px(17, 15 + oy, 3, 3, 0.55); // hood left
      px(28, 15 + oy, 3, 3, 0.55); // hood right
      px(23, 19 + oy, 1, 5, 0.35); // zipper
      px(20, 16 + oy, 1, 6, 0.35); // drawstring
      px(27, 16 + oy, 1, 6, 0.35);

      /* ---------- arms ---------- */
      px(10, 20 + oy, 5, 9, 0.9);
      px(33, 20 + oy, 5, 9, 0.9);
      px(10, 29 + oy, 6, 2, 0.55);
      px(32, 29 + oy, 6, 2, 0.55);

      /* ---------- laptop ---------- */
      px(17, 20, 14, 11); // lid frame
      clear(18, 21, 12, 8); // screen (theme background)

      // code lines on screen
      px(19, 22, 5, 1, 0.6);
      px(25, 22, 3, 1, 0.35);
      px(19, 24, 7, 1, 0.45);
      px(19, 26, 4, 1, 0.45);
      if (cursorOn) px(24, 26, 1, 1, 0.85);

      // base / keyboard
      px(13, 31, 22, 2);
      clear(15, 31, 18, 1);
      px(15, 32, 18, 1, 0.4);

      /* ---------- hands typing ---------- */
      const lh = typeStep === 0 ? 29 : 30;
      const rh = typeStep === 0 ? 30 : 29;
      px(12, lh, 4, 2);
      px(32, rh, 4, 2);


      /* ---------- desk ---------- */
      px(2, 34, 44, 1, 0.35);
      px(2, 35, 44, 1, 0.12);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      start = 0;
    };
  }, [scale]);

  return (
    <canvas
      ref={canvasRef}
      width={W * scale}
      height={H * scale}
      role="img"
      aria-label="Pixel-art developer mascot typing on a laptop"
      className="text-foreground [image-rendering:pixelated]"
      style={{ width: W * scale, height: H * scale }}
    />
  );
}
