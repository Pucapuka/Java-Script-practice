class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }
}

let bulldog = new Cachorro(4, "Bulldog");

console.log(bulldog.raca);
console.log(bulldog.patas);

console.log(bulldog instanceof Mamifero); //checar se é instancia
