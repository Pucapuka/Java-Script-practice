//TRABALHANDO COM OS PARÂMETROS FORA DO OBJETO
let calculadora ={
    soma: function(a,b){return a+b},
    subtracao: function(a,b){return a-b},
    multiplicacao: function (a,b){return a*b},
    divisao: function(a,b){return a/b}
}

console.log(calculadora.soma(12,4));
console.log(calculadora.subtracao(12,4));
console.log(calculadora.multiplicacao(12,4));
console.log(calculadora.divisao(12,4));

/*
TRABALHANDO COM OS PARÂMETROS DENTRO DO OBJETO
let calculadora ={
    a: 12,
    b:4,
    soma: function(a,b){return this.a+this.b},
    subtracao: function(a,b){return this.a-this.b},
    multiplicacao: function (a,b){return this.a*this.b},
    divisao: function(a,b){return this.a/this.b}
}

console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
*/
