import { Place } from 'domain/location/value-objects/place.value-object';
import { Entity } from 'shared/entities/entity';

export interface ILocation {
  id: string;
  currentPlace: object;
  startingPlace: object;
  finalPlace: object;
  idOrder: string;
}

export class Location extends Entity {
  private readonly currentPlace: Place;
  private readonly startingPlace: Place;
  private readonly finalPlace: Place;
  private readonly idOrder: string;

  constructor(
    currentPlace: Place,
    startingPlace: Place,
    finalPlace: Place,
    idOrder: string,
  ) {
    super();

    currentPlace.isValid()
      ? (this.currentPlace = currentPlace)
      : this.addNotification(currentPlace.notifications);

    startingPlace.isValid()
      ? (this.startingPlace = startingPlace)
      : this.addNotification(startingPlace.notifications);

    finalPlace.isValid()
      ? (this.finalPlace = finalPlace)
      : this.addNotification(finalPlace.notifications);

    this.idOrder = idOrder;
  }

  public json(): ILocation {
    return {
      id: this.id,
      currentPlace: this.currentPlace.toJson(),
      startingPlace: this.startingPlace.toJson(),
      finalPlace: this.finalPlace.toJson(),
      idOrder: this.idOrder,
    };
  }
}
