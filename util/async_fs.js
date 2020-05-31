const fs = require('fs');

// returns null if succeeds, err otherwise
const writeFile = async (filePath, payload) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, payload, err => err ? reject(err) : resolve(null));
  })
}

// returns files in the dir if succeeds
const readdir = async (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      err ? reject(err) : resolve(files);
    })
  })
}


module.exports.old = fs;
module.exports.writeFile = writeFile;
module.exports.readdir = readdir;
