// Função que calcula o saldo de vitorias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função que determina o nível com base no saldo de vitórias e saudações
function determinarNivel(vitorias) {
    let saudacoes = "";

    switch (true) {
        case vitorias < 10:
            saudacoes = "Bom!!";
            break;

        case vitorias <= 20:
            saudacoes = "Parabéns!!";
            break;

        case vitorias <= 50:
            saudacoes = "Bom trabalho!!";
            break;

        case vitorias > 50:
            saudacoes = "Excelente Pontuação!!";
            break;
    }

    let nivel;

    if (vitorias < 10) nivel = "Ferro";
    else if (vitorias <= 20) nivel = "Bronze";
    else if (vitorias <= 50) nivel = "Prata";
    else if (vitorias <= 80) nivel = "Ouro";
    else if (vitorias <= 90) nivel = "Diamante";
    else if (vitorias <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    return { nivel, saudacoes };
}

// Função principal que utiliza as funções anteriores
function calcularNivelEExibirMensagem(vitorias, derrotas) {
    let saldoVitorias = calcularSaldo(vitorias, derrotas);
    let { nivel, saudacoes } = determinarNivel(vitorias);

    // Retorna saudações com o saldo de vitórias e o nivel do jogador
    return `${saudacoes ? `${saudacoes} ` : ""}O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}

// Exemplo de uso da função principal
let vitorias = 100; // número de vitórias
let derrotas = 30; // número de derrotas 
let mensagem = calcularNivelEExibirMensagem(vitorias, derrotas);

// mensagem e saída 
console.log(mensagem);