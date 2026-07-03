/**
 * Convert polar coordinates to Cartesian for radial/orbital layout.
 * @param cx       Centre X (pixels)
 * @param cy       Centre Y (pixels)
 * @param radius   Distance from centre
 * @param angleDeg Angle in degrees (0 = top, clockwise)
 */
export function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number
): { x: number; y: number } {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

/**
 * Distribute N items evenly around a circle.
 * Returns an array of angles (degrees), starting from the top.
 */
export function evenAngles(count: number, offsetDeg = 0): number[] {
  return Array.from({ length: count }, (_, i) => (360 / count) * i + offsetDeg);
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Lightweight className merger (no clsx dependency needed).
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
