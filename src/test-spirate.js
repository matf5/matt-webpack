const Spritesmith = require('spritesmith');

const fs = require('fs');
const path = require('path');

const sprites = [
  './src/close.png',
  './src/company.png'
];
console.log(Spritesmith);
Spritesmith.run({
  src: sprites
}, (err, result) => {
  console.log(err);
  console.log(result);
  fs.writeFileSync(path.join(__dirname, '../dist/sprite.jpg'), result.image);
});