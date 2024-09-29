class Guerreiro{
    
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    

        function ataque(tipo){
            if (tipo == "mago")
                return "magia";
            else if (tipo == "guerreiro")
                return "espada";
            else if (tipo == "monge")
                return "artes marciais";
            else if (tipo == "ninja")
                return "shuriken";
            else
                return "tipo inválido";
        }

        this.ataque = ataque(this.tipo);
    }
}

let guerreiros = [
    guerreiro1 = new Guerreiro("Presto", 16, "mago"),
    guerreiro2 = new Guerreiro("Fred", 20, "guerreiro"),
    guerreiro3 = new Guerreiro("Kimura", 19, "ninja"),
    guerreiro4 = new Guerreiro("Feilong", 25, "monge")
];

guerreiros.forEach((guerreiro) => {
    console.log(`o ${guerreiro.tipo} atacou usando ${guerreiro.ataque}.`);    
});
