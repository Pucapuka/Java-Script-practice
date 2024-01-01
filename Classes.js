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
