const { server } = require('../../server');

const options = {
  url: '/ping',
  method: 'GET',
};

describe('ping route', () => {
  it('should respond with string pong on /GET request', async () => {
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof '');
    expect(response.result).toEqual('pong');
  });
  it('should return status code 200 for GET call', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
