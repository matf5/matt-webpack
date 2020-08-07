const fs = require('fs');
const path = require('path');
const { runLoaders } = require('loader-runner');

runLoaders({
  resource: './index.css',
  loaders: [{
    loader: path.resolve(__dirname, "./spite-loader.js"),
    options: {
      name: 'test'
    }
  }],
  readResource:fs.readFile.bind(fs)
}, (err, result) => 
  (err ? console.error(err) : console.log(result))
)