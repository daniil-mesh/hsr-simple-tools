import { IAction } from '@/interfaces/action';
import { BasicStat } from '@/enums/basic-stat';
import { CharacterKey } from '@/enums/character-key';
import AbstractCharacter from '../abstract-character';
import Damage from '@/classes/action/damage';

export default class Jingliu extends AbstractCharacter {
  _key = CharacterKey.Jingliu;
  _basicStats = {
    [BasicStat.Atk]: 679.14,
    [BasicStat.Def]: 485.1,
    [BasicStat.Hp]: 1436,
    [BasicStat.Spd]: 96,
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
