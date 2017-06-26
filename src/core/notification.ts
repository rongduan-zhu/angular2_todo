import { Action } from './operation';

export class Notification {
  public readonly timestamp = new Date();

  constructor(public action: Action, public content: string) {}
}
