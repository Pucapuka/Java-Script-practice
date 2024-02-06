let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, texto)=>{
   // error = "não consegui ler seu arquivo!";
    if(error){
        throw error;
    }else{
        console.log(texto);
    }
});

writeFile("arquivo.txt", "texto escrito por write file", (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Escrevi esse texto");
    }
})
