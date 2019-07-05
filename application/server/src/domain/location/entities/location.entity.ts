import { ILocation } from 'domain/location/entities/ilocation-entity.interface';
import { Place } from 'domain/location/value-objects/place.value-object';
import { Entity } from 'shared/entities/entity';

export class Location extends Entity {
  private readonly currentPlace: Place;
  private readonly originPlace: Place;
  private readonly destinationPlace: Place;
  private readonly idOrder: string;

  constructor(
    currentPlace: Place,
    originPlace: Place,
    destinationPlace: Place,
    idOrder: string,
  ) {
    super();

    currentPlace.isValid()
      ? (this.currentPlace = currentPlace)
      : this.addNotification(currentPlace.notifications);

    originPlace.isValid()
      ? (this.originPlace = originPlace)
      : this.addNotification(originPlace.notifications);

    destinationPlace.isValid()
      ? (this.destinationPlace = destinationPlace)
      : this.addNotification(destinationPlace.notifications);

    this.idOrder = idOrder;
  }

  public json(): ILocation {
    return {
      id: this.id,
      currentPlace: this.currentPlace.toJson(),
      originPlace: this.originPlace.toJson(),
      destinationPlace: this.destinationPlace.toJson(),
      idOrder: this.idOrder,
    };
  }
}
