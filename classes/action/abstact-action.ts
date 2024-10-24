import { IAction } from '@/interfaces/action';

export default abstract class AbstractAction implements IAction {
  abstract execute(): void;
}
