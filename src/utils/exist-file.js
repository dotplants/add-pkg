const fs = require('fs');
const path = require('path');

const existFile = fileName =>
  new Promise(resolve => {
    const filePath = path.resolve('.', fileName);
    fs.stat(filePath, (err, stats) => {
      if (err) {
        return resolve(false);
      }

      resolve(stats);
    });
  });

module.exports = existFile;
