import { Name } from 'domain/user/value-objects/name.value-object';

describe('Test of ValueObject of Name', () => {
  it('should be create a name with success', () => {
    const name = new Name('Ragnar', 'Lothbrook');

    expect(name.isValid()).toBe(true);
  });

  it('should be not create a name with success', () => {
    const name = new Name('firstnamewithmoreof15caracters', 'Lothbrook');

    expect(name.isValid()).toBe(false);
  });
});
