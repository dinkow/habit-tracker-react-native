import { PixelRatio, useWindowDimensions } from 'react-native';

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export function useResponsive() {
  const { width } = useWindowDimensions();

  const dp = (pct: number, min: number, max: number) => clamp(width * pct, min, max);

  const gapSm = dp(0.015, 6, 16);
  const gapMd = dp(0.02, 8, 24);
  const gapLg = dp(0.03, 12, 32);

  const cell = dp(0.08, 34, 80);
  const button = dp(0.10, 80, 120);
  const icon = dp(0.06, 24, 40);

  const sp = (pt: number, min = 12, max = 24) =>
    clamp(pt * PixelRatio.getFontScale?.() || pt, min, max);

  return { gapSm, gapMd, gapLg, cell, button, icon, sp, dp, clamp };
}
