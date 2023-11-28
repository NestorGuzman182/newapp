const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3011;

app.use(express.static(__dirname))
  ;


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
  
  exec('http://localhost:3011/');
});