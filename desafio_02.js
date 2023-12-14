let vitorias = 70; // número de vitórias 
let derrotas = 80; // número de derrotas 
let mensagem = calcularNivelEExibirMensagem(vitorias, derrotas);

// Função que calcula o saldo de Rankeadas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função que determina o nível com base no saldo de vitórias e a mensagem especial
function determinarNivel(vitorias) {
    let mensagemEspecial = "";

    switch (true) {
        case vitorias < 0:
            mensagemEspecial = "Número de vitórias negativo! Algo de errado aconteceu.";
            break;

        case vitorias < 10:
            mensagemEspecial = "Bom!!";
            break;

        case vitorias <= 20:
            mensagemEspecial = "Parabéns!!";
            break;

        case vitorias <= 50:
            mensagemEspecial = "Bom trabalho!!";
            break;

        case vitorias > 50:
            mensagemEspecial = "Excelente Pontuação!!";
            break;
    }

    let nivel;

    if (vitorias < 0) {
        nivel = "Sem Classificação";
    } else if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { nivel, mensagemEspecial };
}

// Função principal que utiliza as funções anteriores
function calcularNivelEExibirMensagem(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const { nivel, mensagemEspecial } = determinarNivel(saldoVitorias);

    // Retorna saudações com o saldo de vitórias, o nível e a mensagem especial
    return `${mensagemEspecial ? `${mensagemEspecial} ` : ""}O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}
// mensagem e saída 
console.log(mensagem);

