//é igula a filter so altera o retorno do array
//no filter por exemplo somente filtra os resultado
//mas no map retorna o array do mesmo tamanho do original so que 
//alterando o valor dos indices
//map(valor,indice,array)

/*
                            exemplo

const numeros = [5, 50, 80, 10, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(function(value, i, array) {
    return 0
})
console.log(numerosEmDobro)
*/

/* para cada elemento:
 * retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto
 */

const pessoas = [
    { nome: 'Luiz', idade: 14 },
    { nome: 'Sara', idade: 23 },
    { nome: 'João', idade: 44 },
    { nome: 'Ricarda', idade: 84 },
    { nome: 'Ricardo', idade: 4 }
]
id = 0
const soNome = pessoas.map(value => value.nome)
const soIdade = pessoas.map(value => ({ idade: value.idade }))

const addId = pessoas.map((obj, i) => {
    const newObj = {...obj }
    newObj.id = i
    return newObj
})
console.log(addId)