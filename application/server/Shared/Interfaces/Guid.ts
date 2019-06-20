import uuid from 'uuid/v4';

export class Guid {
  public create(): string {
    return uuid()
      .replace('-', '')
      .substring(1, 6);
  }
}
