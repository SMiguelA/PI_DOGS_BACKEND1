const request = require('supertest');
const app = require('../../src/app');

describe('Prueba de existencia de ruta GET', () => {
  it('GET /dogs deberia dar un estatus 200', async () => {
    const response = await request(app).get('/dogs'); 
    expect(response.statusCode).toBe(200);
  });
});