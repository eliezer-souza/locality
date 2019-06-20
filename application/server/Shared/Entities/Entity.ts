import Guid from 'Shared/Interfaces/Guid';
import Notification from 'Shared/Interfaces/Notification';

export default abstract class Entity extends Notification {
  public id: string;

  constructor() {
    super();
    this.id = new Guid().create();
  }
}
