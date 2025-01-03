/*
Write a function that will draw m integers from 0 to n. Pass parameters m and n and two flags to the function:

the first determines whether the drawn numbers may be repeated;
the second one states if the returned array of numbers should be sorted.
Use the Set class.

Test your solution using the following code:

play_arrow
sync
download
*/

function setAdd(set, m, n){
    while(set.size < m){
        set.add(Math.floor(Math.random() * n) + 1);
    }
    return set;
}

function arrayPush(array, m, n){
    while(array.length < m){
        array.push(Math.floor(Math.random() * n) + 1);
    }
    return array;
}

function getRandomSet(m, n, repeat, sorted){
    let array = repeat ? [] : new Set();
    if(repeat){
        arrayPush(array, m, n);
    }else{
        setAdd(array, m, n);
    }
    
    let result = [...array];
    if(sorted){
        result.sort((a,b) => a-b);
    }
    
    return result;
}

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));

/*SAMPLE RESOLUTION
function getRandomSet(m, n, uniq, sorted) {
    let retVal = uniq ? new Set() : [];
    let push = (e) => uniq ? retVal.add(e) : retVal.push(e);
    let length = () => uniq ? retVal.size : retVal.length;

    for(;length() < m;) {
        push(Math.floor(Math.random() * Math.floor(n)));
    }

    return sorted ? [...retVal].sort((n1, n2) => n1 - n2) : [...retVal];
}
*/

