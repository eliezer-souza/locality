import { Place } from 'domain/location/value-objects/place.value-object';

describe('test of valueobject of place', () => {
  it('should be created with success', () => {
    const place = new Place(-23.5329, -46.6395, 'São Paulo', 'SP', 'Brazil');

    expect(place.isValid()).toBe(true);
  });

  it('should not successfully create the order because the city is larger than the maximum length of 25 characters', () => {
    const place = new Place(
      -23.5329,
      -46.6395,
      'abcdefghijklmnopqrstuvwxyz',
      'SP',
      'Brazil',
    );

    expect(place.isValid()).toBe(false);
  });

  it('should not successfully create the order because the state is larger than the maximum length of 15 characters', () => {
    const place = new Place(
      -23.5329,
      -46.6395,
      'São Paulo',
      'abcdefghijklmnopqrstuvwxyz',
      'Brazil',
    );

    expect(place.isValid()).toBe(false);
  });

  it('should not successfully create the order because the country is larger than the maximum length of 15 characters', () => {
    const place = new Place(
      -23.5329,
      -46.6395,
      'São Paulo',
      'SP',
      'abcdefghijklmnopqrstuvwxyz',
    );

    expect(place.isValid()).toBe(false);
  });
});
