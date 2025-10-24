// index.js
function suma(a, b) {
  return a + b;
}

// Ejecutar directamente
if (require.main === module) {
  console.log("Resultado de 2 + 3 =", suma(2, 3));
}

module.exports = suma;
