// cypress/plugins/file-tasks.js
const fs = require('fs');
const path = require('path');

/**
* Procura por um arquivo com um nome parcial em uma pasta de download
* e aguarda até que ele apareça ou o timeout seja atingido.
*/
const findDownloadedFile = ({ folder, partialName, timeout }) => {
  const filePath = path.join(folder);
  const startTime = Date.now();

  const checkFile = (resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) return reject(err);

      const foundFile = files.find(file => file.includes(partialName));

      if (foundFile) {
        return resolve(path.join(filePath, foundFile));
      }

      if (Date.now() - startTime >= timeout) {
        return resolve(null); // Retorna null se o timeout for atingido
      }

      // Tenta novamente após um pequeno atraso
      setTimeout(() => checkFile(resolve, reject), 500);
    });
  };

  // Retorna uma Promise para esperar que o arquivo apareça
  return new Promise(checkFile);
};

module.exports = {
  findDownloadedFile,
};