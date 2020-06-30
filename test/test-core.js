const path = require('path');
const fs = require('fs');
const test = require('ava');
const core = require('../');

test('core should return error with one doble link', async t => {
  const md = fs.readFileSync(path.resolve('./test/test-fail.md'), 'utf8');
  const error = await t.throwsAsync(core(md));
    t.is(error.message, '\n\nERROR, duplicate links found:\n  ✖  https://url-link-1\n');
});

test('core should return resolve', async t => {
  const md = fs.readFileSync(path.resolve('./test/test-success.md'), 'utf8');
  const success = await core(md);
    t.is(success, undefined);
});