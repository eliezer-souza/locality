import { Command } from 'shared/commands/command';

export class CreateLocationCommand extends Command {
  public latitude: number;
  public longitude: number;
  public city: string;
  public state: string;
  public country: string;
  public latitudeFinal: number;
  public longitudeFinal: number;
  public cityFinal: string;
  public stateFinal: string;
  public countryFinal: string;
  public idOrder: string;

  constructor(
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    country: string,
    latitudeFinal: number,
    longitudeFinal: number,
    cityFinal: string,
    stateFinal: string,
    countryFinal: string,
    idOrder: string,
  ) {
    super();
    this.latitude = latitude;
    this.longitude = longitude;
    this.city = city;
    this.state = state;
    this.country = country;
    this.latitudeFinal = latitudeFinal;
    this.longitudeFinal = longitudeFinal;
    this.cityFinal = cityFinal;
    this.stateFinal = stateFinal;
    this.countryFinal = countryFinal;
    this.idOrder = idOrder;
  }
}
