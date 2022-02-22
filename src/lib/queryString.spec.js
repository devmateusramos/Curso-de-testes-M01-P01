const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid string when an object is provided', () => {
    const obj = {
      name: 'Mateus',
      profession: 'Software Engineer',
    };

    expect(queryString(obj)).toBe('name=Mateus&profession=Software Engineer');
  });
});
