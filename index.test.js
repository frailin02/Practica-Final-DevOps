// index.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Lee el contenido del archivo index.html
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

// Configura el entorno del DOM
const { window } = new JSDOM(html);
global.window = window;
global.document = window.document;

// Importa la función o método que quieres probar
// En este caso, no hay una función específica, pero podrías agregar lógica adicional según tus necesidades

// Ejemplo de prueba
test('Verifica que existan los elementos <p> en el body', () => {
  const paragraphs = document.querySelectorAll('body p');
  expect(paragraphs.length).toBe(7); // Cambia esto según la cantidad de elementos p en tu HTML
});
