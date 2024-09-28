//instanciando objetos por prototipação (não é tão usado)

let cao ={
    latir: function(){
        console.log("auau!");
    },
    
    patas: 4,
    
    raca:" ",
    
    setRaca: function(novaRaca){
        this.raca = novaRaca;
    },
    
    getRaca: function(){
        console.log(`A raça é ${this.raca}.`);
    }
}

pastorAlemao = Object.create(cao);
pastorAlemao.setRaca("Pastor Alemão");

console.log(pastorAlemao.raca);

labrador = Object.create(cao);
labrador.latir()
labrador.setRaca("Labrador");
labrador.getRaca();

//Construtor por função

function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({}); //objeto vazio
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("auau!");
    };
    return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'pardo');

console.log(doberman.raca);
console.log(doberman.patas);
doberman.latir();

//instanciando objeto por "new" (comum de muitas linguagens)
function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function(){
        console.log("auau!");
    };
}

Cachorro.prototype.uivar = function(){ //disse que a melhor forma mais correta de abordar o método (atrelado ao prototype).
    console.log("Auuuuuuu!");
    
}
let huscky = new Cachorro("Husky", 4, 'branco');

console.log (huscky.cor);
huscky.uivar();
huscky.latir();

//aproach mais moderno de criar uma classe (parecido com as outras linguagens)

class dog{
    constructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
        this.patas = patas;
    }
}

let maltez = new dog("Maltez", 4, "branco");
console.log(maltez.raca);
console.log(maltez.patas);
