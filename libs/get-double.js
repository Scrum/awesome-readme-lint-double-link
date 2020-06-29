const getDouble = (links = []) => {
  let link;
  const double = new Set();

  while((link = links.pop())) {
    if (links.includes(link)) {
      double.add(link);
    }
  }

  return [...double];
}

module.exports = getDouble;