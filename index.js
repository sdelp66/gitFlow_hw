function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (numero % 2 === 0) {
    return numero.toString(2);
  } else if (numero % 2 !== 0) {
    return numero.toString(16);
  }
}
