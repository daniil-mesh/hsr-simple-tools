import { IAction } from './action';
import { CharacterKey } from '@/enums/character-key';
import { CharacterStats } from '@/types/all-stats';

export interface ICharacter {
  readonly key: CharacterKey;
  readonly basicStats: CharacterStats;

  getAttack(): IAction[];
  setAttack(): void;

  getSkill(): IAction[];
  setSkill(): void;

  getTalent(): IAction[];
  setTalent(): void;

  getUltimate(): IAction[];
  setUltimate(): void;
}
