/**
 * @jest-environment node
 */

const { server } = require('../../server');

const options = {
  url: '/books/10',
  method: 'GET',
};

describe('books route', () => {
  it('should respond with object of book rating', async () => {
    const response = await server.inject(options);
    // console.log(response);
    expect(await typeof response.result).toEqual(typeof {});
    expect(await response.result).toEqual({"rating": 4.45});
  });
  it('should return status code 200 for GET call', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
