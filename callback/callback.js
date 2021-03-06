//sao funcoes que acontecem depois que uma tarefa é realizada

//exemplo nao utilizando callbak
/*
function random(min = 1000, max = 3000) {
    //funcao que gera um numero aleatorio entre 1000 e 3000
    const num = Math.random() * (min - max) + min;
    return Math.floor(num)
}

function fala1() { setTimeout(() => { console.log('fala 1'); }, random()) }

function fala2() { setTimeout(() => { console.log('fala 2'); }, random()) }

function fala3() { setTimeout(() => { console.log('fala 3'); }, random()) }

fala1();
fala2();
fala3();
console.log('olá, mundo!')
*/

//no exemplo acima o ola mundo sempre sera o primeiro a ser executado pois as outras funcoes a pesar de terem sido declaradas antes
// possuem o setTimeout que faz com que elas sejam executadas depois de um certo tempo e alem disso elas sao executadas em tempos aleatorios
//entre 1 e 3 segundos devido a funcao random mas vamos supor que pra funcao fala 2 ser executada a fala 1 ter que ser executada antes oq fariamos?
// a resposta é simples callback

//exemplo utilizando callback:

function random(min = 1000, max = 3000) {
    //funcao que gera um numero aleatorio entre 1000 e 3000
    const num = Math.random() * (min - max) + min;
    return Math.floor(num)
}

function fala1(callback) {

    setTimeout(() => {
        console.log('fala 1');
        if (callback) callback(); //se tiver uma funcao de callback vai executar aqui
    }, random())
}

function fala2(callback) {
    setTimeout(() => {
        console.log('fala 2');
        if (callback) callback();
    }, random())
}

function fala3(callback) {
    setTimeout(() => {
        console.log('fala 3');
        if (callback) callback();
    }, random())
}
//escolhendo a ordem
fala1(() => { //primeiro sera executado o fala1 chamando o fala2
    fala2(() => { //depois sera executado o fala 2 chamando o fala3
        fala3(() => { //depois sera executadi o fala 3 executando o ola mundo
            console.log('olá, mundo!')
        })
    })
});
//esta forma funciona mas pode ficar muito confuso essa forma pode ser chamada de callbackHell(o inferno do callback)
//mas tem outra forma menos confusa que sera mostrada abaixo
/**
 * f1(f1callBack)
 * 
 * function f1callBack(){
 *  f2(f2callBack)
 * }
 * 
 * function f2callBack(){
 *  f3(f3callBack)
 * }
 * 
 * function f3callBack(){
 * console.log('olá, mundo!')
 * }
 * 
 **/