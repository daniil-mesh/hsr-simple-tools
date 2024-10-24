import { IAction } from '@/interfaces/action';
import { BasicStat } from '@/enums/basic-stat';
import { CharacterKey } from '@/enums/character-key';
import AbstractCharacter from '../abstract-character';
import Damage from '@/classes/action/damage';

export default class Acheron extends AbstractCharacter {
  _key = CharacterKey.Acheron;
  _basicStats = {
    [BasicStat.Atk]: 698.54,
    [BasicStat.Def]: 436.59,
    [BasicStat.Hp]: 1125,
    [BasicStat.Spd]: 101,
  };

  public setSkill(): IAction[] {
    return [new Damage()];
  }

  public setTalent(): IAction[] {
    return [];
  }

  public setUltimate(): IAction[] {
    return [new Damage()];
  }
}
