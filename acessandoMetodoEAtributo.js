class Endereco{
    constructor(local, bairro, cidade, estado){
        this.local = local;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    mostrarEndereco(){
        console.log(`Endereco: ${this.local}. ${this.bairro}. ${this.cidade}-${this.estado}.`);
    }
    
    mudarLocal(novoLocal){
        this.local = novoLocal;
    }
    
    mudarBairro(novoBairro){
        this.bairro = novoBairro;
    }
    
    mudarCidade(novaCidade){
        this.cidade = novaCidade;
    }
    
    mudarEstado(novoEstado){
        this.estado = novoEstado;
    }
    
    /*reutilizando os métodos dentro de um método da própria classe.
    Outra forma que pode ser utilizada é a atribuição direta, sem
    precisar chamar o método da classe. Ex: this.estado = novoEstado;
    */
    mudarEndereco(novoLocal, novoBairro, novaCidade, novoEstado){
        this.mudarLocal(novoLocal);
        this.mudarBairro(novoBairro);
        this.mudarCidade(novaCidade);
        this.mudarEstado(novoEstado);
    }
}


let cliente1 = new Endereco
( "Rua Brasil, 1249",
    "Nova Imperatriz",
    "Imperatriz",
    "MA"
);

cliente1.mostrarEndereco();
cliente1.mudarLocal("Rua São Paulo, 1233");
cliente1.mostrarEndereco();
cliente1.mudarBairro("Centro");
cliente1.mudarCidade("São Luis de Montes Belos");
cliente1.mudarEstado("GO");
cliente1.mostrarEndereco();
cliente1.mudarEndereco("Rua São João, 13", "Jardim Viana", "Imperatriz", "MA");
cliente1.mostrarEndereco();
