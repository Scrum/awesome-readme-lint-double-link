const path = require('path');
const fs = require('fs');
const md = fs.readFileSync(path.resolve('./test/test.md'), 'utf8');
const lint = require('./')

lint(md)

