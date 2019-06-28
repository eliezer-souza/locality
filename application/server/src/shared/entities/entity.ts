import { Guid } from 'shared/interfaces/guid';
import { Notification } from 'shared/interfaces/notification';

export abstract class Entity extends Notification {
  public id: string;

  constructor() {
    super();
    this.id = new Guid().create();
  }
}
