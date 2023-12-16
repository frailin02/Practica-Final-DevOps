
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

const { window } = new JSDOM(html);
global.window = window;
global.document = window.document;

test('elementos p en mi archivo', () => {
  const paragraphs = document.querySelectorAll('body p');
  expect(paragraphs.length).toBe(7); 
});