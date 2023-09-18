const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Función para sumar dos números
function sumarNumeros(valor1, valor2) {
  return valor1 + valor2;
}

app.post('/sumar', (req, res) => {
  const { valor1, valor2 } = req.body;

  const numero1 = parseInt(valor1);
  const numero2 = parseInt(valor2);
  const resultado = numero1 + numero2;
  res.json({ resultado });
});

app.listen(port, () => {
  console.log(`Servidor Activo ${port}`);
});

module.exports = {
  sumarNumeros
};