function counter(){
    const text = document.querySelector('.text-area').value;
    const numberOfWords = document.querySelector("#number-of-words");
    const words = text.match(/[áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇa-zA-Z0-9]+/g);
    const wordCount = words? words.length : 0;
    
    numberOfWords.innerHTML = `Número de palavras: ${wordCount}`;
}
