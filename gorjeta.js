// 1. Definindo os Valores Iniciais
const valorConta = 100;          // valor da conta em reais
const percentualGorjeta = 15;    // percentual da gorjeta (%)

// 2. Calculando a Gorjeta
const valorGorjeta = valorConta * (percentualGorjeta / 100);

// 3. Calculando o Valor Total
const valorTotal = valorConta + valorGorjeta;

// 4. Exibindo o Resultado
console.log(
  `Valor da Conta: R$${valorConta.toFixed(2)}, ` +
  `Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
  `Total a pagar: R$${valorTotal.toFixed(2)}`
);
