const finder = (array, searchArray) => {
  const indexes = [];
  for (const searchValue of searchArray) {
    const result = array.indexOf(searchValue);

    if (result !== -1) {
      indexes.push(result);
    }
  }

  return indexes[0] ? indexes : false;
};

const arrayRemover = (array, removeArray) => {
  for (const index of removeArray) {
    array[index] = null;
  }

  return array.filter(v => v);
};

const argvScanner = () => {
  const query = {
    packages: [],
    type: 'normal',
    isDryRun: false
  };
  let v = process.argv;
  v.splice(0, 2); // delete `npx add-pkg`
  if (!v[0]) {
    throw new Error('Unknown argv');
  }

  const isDev = finder(v, ['-d', '-D', '--dev']);
  if (isDev) {
    query.type = 'dev';
    v = arrayRemover(v, isDev);
  }

  const isGlobal = finder(v, ['-g', '-G', '--global']);
  if (isGlobal) {
    query.type = 'global';
    v = arrayRemover(v, isGlobal);
  }

  const isDryRun = finder(v, ['--dry-run']);
  if (isDryRun) {
    query.isDryRun = true;
    v = arrayRemover(v, isDryRun);
  }

  query.packages = v;
  if (!query.packages[0]) {
    throw new Error('Unknown packages');
  }

  return query;
};

module.exports = argvScanner;
