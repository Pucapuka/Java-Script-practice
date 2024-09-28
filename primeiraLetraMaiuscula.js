let nomes = ['joãozinho', 'pedrinho', 'luizinho'];

//essa é a função que retorna a primeira maiúscula
function capitalize(n){
    let primeiraLetra = n.slice(0,1);
    let resto = n.slice(1);
    
    return primeiraLetra.toUpperCase()+resto.toLowerCase();
}

let novo = [];

//guardando em uma variável cada elemento da lista
for (let i=0; i<nomes.length; i++){
    novo[i] = capitalize(nomes[i]);
}

//Imprimindo a lista com numeração ordinal
for(let i=0; i<nomes.length; i++){
    console.log(i+1+"º: "+ novo[i]);
}

/*Se fosse feito com forEach

let i = 1;

nomes.forEach(nome =>{
    
    console.log(i+"º: "+capitalize(nome));
    i++;
}
)
*/

