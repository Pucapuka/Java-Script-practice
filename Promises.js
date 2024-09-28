let promessa = Promise.resolve(4+8);

console.log('aaaaaaaaaaa');
promessa.then((value)=> console.log(value));//fica por último
console.log(promessa); 

let erro= Promise.resolve(new Error("Não deu certo!"));

console.log("aaaaaaaa");
erro.then((value) => console.log(value));
erro.catch((reason) => console.log("Erro: "+ reason));

function verificar(num){

    return new Promise((resolve, reject) =>{
        if(num==2){
            resolve(console.log(`O Número é ${num}`));
        }else{
            reject(new Error("Falhou!"));
        }
    });

}

verificar(2);
verificar(3);

