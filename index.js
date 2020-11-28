// some third-party lib register like below:
// and will use the tsconfig.json
require('ts-node').register()

// my own register for some special ts file like below:
require('ts-node').register({
  skipProject:true,
  compilerOptions: {
    // node.js env should generate CommonJs module
    module: 'commonjs',
    target: 'ES2018',
    strictNullChecks: true,
    strictFunctionTypes: true
  }
})

module.exports = require('./test.ts')
