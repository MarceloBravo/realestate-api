/**
 * Importa el módulo Express para crear aplicaciones web.
 */
const express = require('express');

/**
 * Crea una instancia de la aplicación Express.
 */
const app = express();

/**
 * Lista de inmuebles disponibles.
 * @type {Array<{id: number, direccion: string, precio: number, tipo: string}>}
 */
const inmuebles = [
  { id: 1, direccion: 'Calle 123', precio: 150000, tipo: 'Apartamento' },
  { id: 2, direccion: 'Avenida 456', precio: 230000, tipo: 'Casa' },
  { id: 3, direccion: 'Carrera 789', precio: 120000, tipo: 'Estudio' }
];

/**
 * Endpoint para obtener la lista de inmuebles.
 * @name /api/inmuebles
 * @function
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
app.get('/api/inmuebles', (req, res) => {
  res.json(inmuebles);
});

/**
 * Exporta la instancia de la aplicación para ser utilizada en otros módulos.
 */
module.exports = app;
