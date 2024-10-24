import { ConeKey } from '@/enums/cone-key';
import { ConeStats } from '@/types/all-stats';

export interface ICone {
  readonly key: ConeKey;
  readonly basicStats: ConeStats;
}
