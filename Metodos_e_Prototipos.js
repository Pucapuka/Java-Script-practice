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

cao.setRaca("Pug");
cao.getRaca();
cao.latir();

//Prototype é um objeto fallback de outro objeto. Quando um objeto recebe uma requisição de uma propriedade que não tem, procura no prototype dele.
//Na orientação a objetos, o prototype pode ser chamado de classe.

console.log(Object.getPrototypeOf(cao)==Object.prototype); //true
console.log(cao.hasOwnProperty("patas"));//true
console.log(cao.hasOwnProperty("focinho"));//false

//quando criamos um objeto a partir do outro, o base será o prototype

const novoCao = Object.create(cao);

console.log(novoCao.patas);//4 (igual ao protótipo "cao")

console.log(Object.getPrototypeOf(novoCao)===cao);//true

