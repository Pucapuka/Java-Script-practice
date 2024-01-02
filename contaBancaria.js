class Conta{
    constructor(saldoAtual){
        this.saldoAtual = saldoAtual;
    }

    depositar = function(valor){
        this.saldoAtual += valor;
    }

    sacar = function(valor){
        if(valor>this.saldoAtual){
            console.log("Saldo insuficiente");
        }else{
            this.saldoAtual -= valor;
        }
    }

    verificarSaldo = function(){
        console.log(`Saldo atual: ${this.saldoAtual}.`);
    }
}

let contaPaulo = new Conta(200);

contaPaulo.verificarSaldo();//200

contaPaulo.sacar(100);
contaPaulo.verificarSaldo();//100
contaPaulo.depositar(350);
contaPaulo.verificarSaldo();//450
