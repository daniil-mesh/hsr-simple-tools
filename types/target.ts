import { ICharacter } from '@/interfaces/character';
import { Enemy } from '@/interfaces/enemy';
import { ISummon } from '@/interfaces/summon';

export type Target = ICharacter[] | Enemy[] | ISummon[];
