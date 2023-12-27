let numero = 53;

    for(let i=2; i<numero-1; i++){
        if (numero%i===0){
            console.log(i);
            console.log("Numero não é primo.");
            return;
        }/*else{
            continue;
        }*/
    }
    console.log("número primo");
