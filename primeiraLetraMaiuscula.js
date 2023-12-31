let nome = 'joãozinho';

function capitalize(n){
    let primeiraLetra = n.slice(0,1);
    let resto = n.slice(1);
    
    console.log(primeiraLetra.toUpperCase()+resto.toLowerCase());
}

capitalize(nome);
