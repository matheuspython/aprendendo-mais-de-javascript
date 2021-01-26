/*como posso retornar os numeros maiores que 10 desse array?

const numeros = [5, 50, 80, 10, 2, 3, 5, 8, 7, 11, 15, 22, 27]
let numerosMaioresQue10 = []

for (numero of numeros) { if (numero > 10) numerosMaioresQue10.push(numero) }

eu particularmente faria dessa forma se fosse sem utilizar filter
*/
const numeros = [5, 50, 80, 10, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)