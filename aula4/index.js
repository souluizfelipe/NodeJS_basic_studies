const fs = require('fs');

fs.readFile('./clients.json', (error, content) => {
  if(error) {
    console.log('deu erro aqui', error);
  } else {
    console.log(JSON.parse(content));
  }
});
