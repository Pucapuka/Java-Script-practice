class Conta{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca, jurosEspecial){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }
    
    transferirParaCorrente(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }
    
    transferirParaPoupanca(valor){
        this.saldoPoupanca += valor;
        this.saldoCorrente -= valor;
    }
    
    jurosDeAniversario(){
        let juros = (this.saldoPoupanca * this.jurosPoupanca)/100;
        this.saldoPoupanca += juros;
    }
    
    status(){
        console.log(`Saldo Conta Corrente: ${this.saldoCorrente}\nSaldo Conta Poupança: ${this.saldoPoupanca}\nJuros da Poupança:    ${this.jurosPoupanca}\n`);
    }
}

class ContaEspecial extends Conta{
    
   constructor(saldoCorrente, saldoPoupanca, jurosPoupanca, jurosEspecial){
       super(saldoCorrente, saldoPoupanca, jurosPoupanca, jurosEspecial*2);
    }
}


let conta1 = new Conta(1000, 1000, 12);
conta1.status();
conta1.transferirParaCorrente(500);
conta1.status();
conta1.transferirParaPoupanca(500);
conta1.status();
conta1.jurosDeAniversario();
conta1.status();

console.log("conta 2")
let conta2 = new ContaEspecial(1000, 1000, 12);
conta1.status();
conta1.transferirParaCorrente(500);
conta1.status();
conta1.transferirParaPoupanca(500);
conta1.status();
conta1.jurosDeAniversario();
conta1.status();

