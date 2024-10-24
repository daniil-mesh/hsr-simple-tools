export const EnemyKey = {
  PhantyliaTheUndying: 'phantyliatheundying',
} as const;

export type EnemyKey = (typeof EnemyKey)[keyof typeof EnemyKey];
