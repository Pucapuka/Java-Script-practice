let x = document.getElementById("x") ;
let x2 = document.getElementById("x2") ;
let a = document.getElementById("a") ;
let b = document.getElementById("b") ;
let c = document.getElementById("c") ;
let result = document.getElementById('result');

function calculateDelta(){
    const aVal = parseFloat(a.value);
    const bVal = parseFloat(b.value);
    const cVal = parseFloat(c.value);
    
    return (bVal * bVal) - (4 * aVal * cVal);
}

function variable1(){
    const aVal = parseFloat(a.value);
    const bVal = parseFloat(b.value);
    const delta = calculateDelta();
    
    if (delta < 0) {
        return NaN; // No real solution if delta is negative
    }
    return (-bVal + Math.sqrt(delta)) / (2*aVal);
} 

function variable2(){
    const aVal = parseFloat(a.value);
    const bVal = parseFloat(b.value);
    const delta = calculateDelta();
    
    if (delta < 0) {
        return NaN; // No real solution if delta is negative
    }
    
    return (-bVal - Math.sqrt(delta)) / (2*aVal);
} 

function allEquationCalculated(){
    const aVal = parseFloat(a.value);
    const bVal = parseFloat(b.value);
    const cVal = parseFloat(c.value);
    const result1 = variable1() 
    const result2 = variable2();
    
    return (aVal * result1) + (bVal * result2) + cVal; 
}

function calculate(){
    const result1 = variable1().toFixed(2); 
    const result2 = variable2().toFixed(2);
    const finalCalc = allEquationCalculated().toFixed(2);

    if (!isNaN(result1) && !isNaN(result2)){
        
        result.innerHTML = `The result is:\n\n x': ${result1} x": ${result2}. `;
        
    } else if(!isNaN(result1)){
        
        result.innerHTML = `The result is: x': ${result1}. `;
        
    } else if(!isNaN(result2)){
        
        result.innerHTML = `The result is:x': ${result2}. `;
        
    } else{
        
        result.innerHTML = `There's no valid result. `;
        
    }
    
    if(finalCalc>=0){
        result.innerHTML +=`\n All the equation calculated is: ${finalCalc}`;
    }
    
    return result
}
