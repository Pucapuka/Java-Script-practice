class cao{
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    
    get verCor(){
        return this.cor;
    }
    
    set novaCor(valor){
        this.cor = valor;
    }
    
    latir(){
        console.log("Auau!");
    }
}

//Override
cao.prototype.raca = "SRD"; 

bulldog = new cao("Bulldog", 4, "pardo");
console.log(bulldog.raca);
console.log(cao.prototype.raca);
poodle = new cao();
console.log(poodle.raca);
bulldog.latir();
console.log(bulldog.verCor); //usando o getter
bulldog.novaCor = "Vermelho"; //usando o setter
console.log(bulldog.verCor); //usando o getter
