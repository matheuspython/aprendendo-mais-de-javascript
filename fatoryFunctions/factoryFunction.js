//basicamente sao funçoes que retornam objetos exemplo:
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        get imc() { //agora essa funcao virou um getter é como se ela estivesse finjindo ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },
        get retornaNomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set retornaNomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        }

    }
}

const pessoa1 = criaPessoa('matheus', 'souza', 1.71, 68)
pessoa1.retornaNomeCompleto = 'Maria Oliveira Silvas'
console.log(pessoa1.retornaNomeCompleto)