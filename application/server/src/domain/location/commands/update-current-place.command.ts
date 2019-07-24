import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Command } from 'shared/commands/command';

export class UpdateCurrentPlaceCommand extends Command {
  public id: string;

  @IsNotEmpty()
  @IsNumber()
  public readonly latitude: number;

  @IsNotEmpty()
  @IsNumber()
  public readonly longitude: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  public readonly city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  public readonly state: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  public readonly country: string;

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
