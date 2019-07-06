import { validateSync } from 'class-validator';

interface INotification {
  error: boolean;
  message: string[];
}

export abstract class Notification {
  public readonly notifications: INotification = { error: false, message: [] };

  private validate() {
    const errors = validateSync(this);

    if (errors.length > 0) {
      const message = errors
        .map(error =>
          Object.keys(error.constraints).map(key => error.constraints[key]),
        )
        .join(', ');

      this.notifications.error = true;
      this.notifications.message.push(message);
    }
  }

  isValid(): boolean {
    this.validate();

    return !this.notifications.error;
  }

  addNotification(notification: INotification) {
    this.notifications.error = notification.error;
    this.notifications.message.push(...notification.message);
  }
}
