const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

module.exports = function(source) {
  const { name } = loaderUtils.getOptions(this);
  console.log(name);
  const callback = this.async();
  const json = JSON.stringify(source)
  .replace(/\u2028/g, '\\u2028')
  .replace('\u2029/g', '\\u2029');
  fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
    callback(null, data);
  })
  // this.callback(null, json, 2, 3);
  // return `export default ${json}`;
};
