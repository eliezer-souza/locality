import { Command } from 'shared/commands/command';

export class UpdateCurrentLocationCommand extends Command {
  public id: string;
  public latitude: number;
  public longitude: number;
  public city: string;
  public state: string;
  public country: string;

  constructor(
    id: string,
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    country: string,
  ) {
    super();
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.city = city;
    this.state = state;
    this.country = country;
  }
}
