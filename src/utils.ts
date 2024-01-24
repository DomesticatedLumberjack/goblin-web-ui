export function randomRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const dieRoll = (dieSize = 6) => Math.floor(Math.random() * dieSize) + 1;