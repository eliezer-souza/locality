import { Query } from 'shared/queries/query';

export class LocationsOrderQuery extends Query {
  public id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }
}
