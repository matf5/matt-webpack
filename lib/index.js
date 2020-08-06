const Compiler = require('./compiler');
const options = require('../mattpack.config');

new Compiler(options).run();