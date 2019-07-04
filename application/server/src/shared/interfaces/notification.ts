import { validateSync } from 'class-validator';

interface INotification {
  error: boolean;
  message: string[];
}

export abstract class Notification {
  private _notifications: INotification = { error: false, message: [] };

  get notifications() {
    return this._notifications;
  }

  private validate() {
    const errors = validateSync(this);

    if (errors.length > 0) {
      const message = errors
        .map(error =>
          Object.keys(error.constraints).map(key => error.constraints[key]),
        )
        .join(', ');

      this._notifications.error = true;
      this._notifications.message.push(message);
    }
  }

  isValid(): boolean {
    this.validate();

    return !this._notifications.error;
  }

  addNotification(notification: INotification) {
    this._notifications.error = notification.error;
    this._notifications.message.push(...notification.message);
  }
}
