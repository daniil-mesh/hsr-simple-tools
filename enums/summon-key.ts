export const SummonKey = {
  AglaeaSummon: 'aglaeasummon',
} as const;

export type SummonKey = (typeof SummonKey)[keyof typeof SummonKey];
