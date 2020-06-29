const test = require('ava');
const getDouble = require('../libs/get-double');

test('should return empty array', t => {
  const expected = [];
  
  t.deepEqual(getDouble(), expected);
});

test('should return one double link', t => {
  const expected = ['test'];
  const fixtures = ['test', 'test', 'test1']
  
  t.deepEqual(getDouble(fixtures), expected);
});

test('should return two double link', t => {
  const expected = ['test1', 'test'];
  const fixtures = ['test', 'test', 'test1', 'test1']
  
  t.deepEqual(getDouble(fixtures), expected);
});