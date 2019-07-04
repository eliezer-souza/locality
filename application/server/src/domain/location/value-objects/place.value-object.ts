import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ValueObject } from 'src/shared/value-objects/value-object';

export class Place extends ValueObject {
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
    latitude: number,
    longitude: number,
    city: string,
    state: string,
    country: string,
  ) {
    super();

    this.latitude = latitude;
    this.longitude = longitude;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  public toJson() {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
      city: this.city,
      state: this.state,
      country: this.country,
    };
  }
}
