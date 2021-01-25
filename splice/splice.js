const nomes = [
    'eduardo',
    'maria',
    'joana'
]

//splice(indice,deletar,cria,cria1,cria2,cria3,cria4)

/*o primeiro argumento é a partir de qual
 indice voce deseja escolher o 
segunto é quantos indices voce 
deseja apagar e o quarto a diante são novos 
elementos que voce vai adicionar no array
*/
//nomes.splice(2,Number.MAX_VALUE) a partir do indice 2 apaga todos os itens do array 
nomes.splice(2,1,'joao','pedro','salomao')
const valor = nomes.splice(0,1) //retorna um array com o valor do indice 0 do array alem de retiralo do nomes

console.log(nomes)