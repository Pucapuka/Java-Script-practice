//digite o número da tabuada de sua preferênca (no modelo já vem escolhida a de 8)//
var tabuada=8
for (var i = 0; i < 10; i++){
    console.log('Valor de ', tabuada, '+ ' + i, '=', tabuada + i);
}
console.log("");
for (var i=tabuada+10; i > tabuada-1; i--){
    console.log('Valor de ', i, '- ' + tabuada, "=",  i - tabuada);
}
console.log ("");
for (var i = 0; i < 10; i++){
    console.log('Valor de ', tabuada, 'x ' + i, '=',  tabuada * i);
}
console.log("");
for (var i=10*tabuada; i>tabuada-1; i=i-tabuada){
    console.log('Valor de ', i, ": " + tabuada, '= ', i/tabuada);
}
