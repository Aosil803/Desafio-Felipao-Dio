// Variáveis
var nomeHeroi = "Batman";
var xpHeroi = 800;

// Estrutura de decisão com switch, case:
var nivelHeroi;
switch (true) {
    case xpHeroi < 1000:
        nivelHeroi = "Ferro";
        break;
    case xpHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xpHeroi <= 5000:
        nivelHeroi = "Prata";
        break;
    case xpHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xpHeroi <= 8000:
        nivelHeroi = "Platina";
        break;
    case xpHeroi <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case xpHeroi <= 10000:
        nivelHeroi = "Imortal";
        break;
    default:
        nivelHeroi = "Radiante";
}

// Estrutura de decisão de incremento usando if, else:
var XPmensagem;
if (xpHeroi <= 5000) {
    XPmensagem = "Que bom!!";
} else if (xpHeroi <= 9000) {
    XPmensagem = "Parabéns!!";
} else {
    XPmensagem = "Excelente pontuação!!";
}

// Saída
console.log(`${XPmensagem} Seu herói de nome ${nomeHeroi} está no nível de ${nivelHeroi} com ${xpHeroi} pontos de XP.`);


