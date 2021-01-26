//é igula a filter so altera o retorno do array
//no filter por exemplo somente filtra os resultado
//mas no map retorna o array do mesmo tamanho do original so que 
//alterando o valor dos indices
//map(valor,indice,array)

const numeros = [5, 50, 80, 10, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(function(value, i, array) {
    return 0
})
console.log(numerosEmDobro)