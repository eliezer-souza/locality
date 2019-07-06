import { Guid } from 'shared/interfaces/guid';
import { Notification } from 'shared/interfaces/notification';

export abstract class Entity extends Notification {
  public readonly id: string;
  public abstract json(): any;

  constructor() {
    super();
    this.id = new Guid().create();
  }
}
