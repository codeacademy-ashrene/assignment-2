/**
 * @jest-environment node
 */

const { server } = require('../../server');

const options = {
  url: '/books',
  method: 'GET',
};

describe('books route', () => {
  it('should respond with object of book details', async () => {
    const response = await server.inject(options);
    // console.log(response);
    expect(await typeof response.result).toEqual(typeof []);
    expect(await response.result[0]).toEqual({"Author": "J K Rowling", "Name": "Harry Potter and the Sorcerers Stone (Harry Potter, #1)", "id": 10});
  });
  it('should return status code 200 for GET call', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
