function deepComp(arr1, arr2){
    let eqSize = Object.keys(arr1).length === Object.keys(arr2).length;
    
    if(eqSize){
        for(let prop in arr1){
            if(typeof(arr1[prop]) === typeof(arr2[prop])){
                eqSize = typeof(arr1[prop]) === 'object' ? deepComp(arr1[prop], arr2[prop]) : arr1[prop] === arr2[prop];
            }else{
                eqSize = false;
            }
            if(!eqSize)
                break;
        }
    }
    return eqSize;
}


let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false