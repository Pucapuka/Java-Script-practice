/*
Write a decorator named myDecorator that will store the arguments of the decorated function call.

If the function has already been called with these arguments, an appropriate message should appear in the console containing, among other things, the values of those arguments.

Note – the function can be called with any number of arguments, so use rest arguments for this purpose.

Test the decorator using the following code:
*/

function myDecorator(func) {
    // Store a set to track arguments already used
    let usedArgs = new Set();

    return function(...args) {
        // Serialize the arguments to a string to track them
        const argsKey = JSON.stringify(args);
        
        if (usedArgs.has(argsKey)) {
            console.log(`Arguments already used: ${args.join(', ')}`);
        } else {
            // Call the original function and add the arguments to the set
            usedArgs.add(argsKey);
            return func(...args);
        }
    };
}

let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5

//Sample resolution

/*
let myDecorator = function(fn) {
    let cache = new Set();
    let included = function(...args) {
        let found = false;
        for(let e of cache) {
            let index = 0;
            console.log(`${e}`)
            found = true;
            for(let arg of args) {
                console.log(`   ${arg}`);
                if(arg !== e[index++]) {
                    found = false;
                    break;
                }
            }
            if(found) {
                break;
            }
        }
        return found;
    }
    return function(...args) {
        if(included(...args)) {
            console.log(`arguments already used: ${args}`);
        } else {
            cache.add(args);
        }
        fn(...args);

    }
}
*/
