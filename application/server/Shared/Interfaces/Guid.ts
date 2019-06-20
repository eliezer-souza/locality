import uuid from 'uuid/v4';

export default class Guid {
  public create(): string {
    return uuid()
      .replace('-', '')
      .substring(1, 6);
  }
}
