let vitorias = 150
let derrotas = 141
let resultado = saldo(vitorias, derrotas)
console.log(resultado)

function saldo(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let nivel

    if (saldo < 10){
        nivel = "Ferro"
    } else if (saldo >= 11 && saldo <= 20){
        nivel = "Bronze"
    } else if (saldo >= 21 && saldo <= 50){
        nivel = "Prata"
    } else if (saldo >= 51 && saldo <= 80){
        nivel = "Ouro"
    } else if (saldo >= 81 && saldo <= 90){
        nivel = "Diamante"
    } else if (saldo >= 91 && saldo <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    let mensagem = "O Herói tem um saldo de " + saldo + " vitórias" + " e está no nível " + nivel + "!"
    return mensagem
}


