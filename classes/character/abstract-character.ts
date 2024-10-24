import {
  AttackLevel,
  SkillLevel,
  TalentLevel,
  UltimateLevel,
} from '@/types/opportunity-level';
import { IAction } from '@/interfaces/action';
import { ICharacter } from '@/interfaces/character';
import { CharacterKey } from '@/enums/character-key';
import { CharacterStats } from '@/types/all-stats';
import { ICone } from '@/interfaces/cone';
import { Opportunity } from '@/enums/opportunity';
import Damage from '../action/damage';
import Equipment from '../relic/equipment';

export default abstract class AbstractCharacter implements ICharacter {
  protected abstract _key: CharacterKey;
  protected abstract _basicStats: CharacterStats;

  protected _skillMap: Map<SkillLevel, number[]> = new Map();
  protected _talentMap: Map<TalentLevel, number[]> = new Map();
  protected _ultimateMap: Map<UltimateLevel, number[]> = new Map();

  protected _attackLevel: AttackLevel = 6;
  protected _skillLevel: SkillLevel = 10;
  protected _talentLevel: TalentLevel = 10;
  protected _ultimateLevel: UltimateLevel = 10;

  protected [Opportunity.Attack]: IAction[] = [];
  protected [Opportunity.Skill]: IAction[] = [];
  protected [Opportunity.Talent]: IAction[] = [];
  protected [Opportunity.Ultimate]: IAction[] = [];

  protected _attackMap = new Map<AttackLevel, number>()
    .set(1, 0.5)
    .set(2, 0.6)
    .set(3, 0.7)
    .set(4, 0.8)
    .set(5, 0.9)
    .set(6, 1.0)
    .set(7, 1.1)
    .set(8, 1.2)
    .set(9, 1.3);

  constructor(
    protected _cone: ICone | null = null,
    protected _equipement: Equipment | null = null,
  ) {}

  get key() {
    return this._key;
  }

  get basicStats() {
    return this._basicStats;
  }

  public abstract setSkill(): IAction[];
  public abstract setTalent(): IAction[];
  public abstract setUltimate(): IAction[];

  public getAttack() {
    return this.getActions(Opportunity.Attack, this.setAttack());
  }

  public setAttack() {
    return [new Damage(this._attackMap.get(this._attackLevel))];
  }

  public getSkill() {
    return this.getActions(Opportunity.Skill, this.setSkill());
  }

  public getTalent() {
    return this.getActions(Opportunity.Talent, this.setTalent());
  }

  public getUltimate() {
    return this.getActions(Opportunity.Ultimate, this.setUltimate());
  }

  private getActions(property: Opportunity, actions: IAction[]) {
    if (!this[property]) {
      this[property] = actions;
    }
    return this[property];
  }
}
