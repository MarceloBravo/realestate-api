/**
 * Importa el módulo supertest para realizar pruebas HTTP.
 */
const request = require('supertest');

/**
 * Importa la aplicación Express desde el archivo fuente.
 */
const app = require('../src/app');

/**
 * Pruebas para el endpoint GET /api/inmuebles.
 */
describe('GET /api/inmuebles', () => {
  /**
   * Prueba que verifica si el endpoint retorna una lista de inmuebles.
   * @async
   * @function
   */
  it('debería retornar una lista de inmuebles', async () => {
    const res = await request(app).get('/api/inmuebles');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('direccion');
    expect(res.body[0]).toHaveProperty('precio');
  });
});