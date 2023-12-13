// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para atacar
    atacar() {
        let ataque;

        // Definindo o tipo de ataque conforme o tipo de herói
        switch (this.tipo) {
            case "mago":
                ataque = "Magia";
                break;
            case "guerreiro":
                ataque = "Espada";
                break;
            case "monge":
                ataque = "Artes Marciais";
                break;
            case "ninja":
                ataque = "Shuriken";
                break;
        }

        // Retornando a mensagem de ataque. Com nome e idade do heroi
        return `O ${this.tipo} ${this.nome} de ${this.idade} anos, atacou usando ${ataque}`;
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Conan", 35, "guerreiro");
const heroi3 = new Heroi("Ancião", 100, "monge");
const heroi4 = new Heroi("Tartaruga", 30, "ninja");

// Chamando o método atacar para cada herói e imprimindo no console
console.log(heroi1.atacar());
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());
