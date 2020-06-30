const markdownLinkExtractor = require('markdown-link-extractor');
const logSymbols = require('log-symbols');
const table = require('text-table');
const indentString = require('indent-string');
const getDouble = require('./libs/get-double');

const awesomeReadmeLintLink = md => new Promise((resolve, reject) => {
  const links = markdownLinkExtractor(md);
  const double = getDouble(links);

  if (double.length > 0) {
    const message = `

${'error'.toUpperCase(), 'duplicate links found:'}
${table(double.map(link => Array.of(indentString(`${logSymbols.error}`, 2), link)))}
`

    reject(new Error(message));
  }

  resolve();
});

module.exports = awesomeReadmeLintLink;