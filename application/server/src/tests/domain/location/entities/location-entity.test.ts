import { Location } from 'domain/location/entities/location.entity';
import { Place } from 'domain/location/value-objects/place.value-object';

describe('test the entity of location', () => {
  it('should be created the location with success', () => {
    const place = new Place(-23.5329, -46.6395, 'São Paulo', 'SP', 'Brazil');

    const currentPlace = place;
    const originPlace = place;
    const destinationPlace = place;

    const location = new Location(
      currentPlace,
      originPlace,
      destinationPlace,
      'foo123',
    );

    expect(location.isValid()).toBe(true);
  });
});
