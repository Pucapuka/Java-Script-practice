class Carro{
    constructor(marca, cor, gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }
    
    km = 0;
    
    abastecer(maisGasolina){
        this.gasolina += maisGasolina;
    }
    
    dirigir(km){
        if(this.gasolina==0){
            console.log(`Não dá para digirir sem gasolina. Abasteça!`);
            return;
        }
        this.gasolina -= km/5;
        this.km += km;
    }
    
    pintar(novaCor){
        this.cor = novaCor;
    }
    
    status(){
        console.log(`Carro de marca ${this.marca}, ${this.cor}, está com ${this.km}km rodados e com ${this.gasolina}L de gasolina.`);
    }
}

let carro1 = new Carro("Palio", "Branco", 50);
carro1.status();
carro1.dirigir(10);
carro1.status();
carro1.dirigir(30);
carro1.status();
carro1.abastecer(-42);
carro1.status();
carro1.dirigir();
carro1.status();
