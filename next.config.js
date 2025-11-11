const path = require('path');

module.exports = {
  outputFileTracingRoot: path.join(__dirname, '..'),
  // if you also use Turbopack warnings, you can include turbopack.root similarly:
  // turbopack: { root: path.join(__dirname, '..') },
};
