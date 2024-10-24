import { IFormula } from '@/interfaces/formula';

export default abstract class AbstactFormula implements IFormula {
  abstract calculate(): number;
}
