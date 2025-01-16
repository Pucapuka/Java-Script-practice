/*
Write a class called MyIterable that will allow you to create an iterable object with the following properties:

it will be possible to add arbitrary elements to it (add method)
an attempt to add an element that is already in the object will be ignored;
it will be possible to check whether an element is present in the object (has method)
it will be possible to delete an element (del method)
it will be possible to check the number of elements (length property)
it will be possible to use any technique for passing elements of an iterable object (spread operator, for ... of, iterators), and an appropriate generator should be used in the implementation.

*/

class MyIterable{
    constructor(...iterables){
        this.iterables = iterables;
    }
    
    add(element){
        if(!this.has(element)){
            this.iterables.push(element);
        }else{
            console.log(`The element ${element} already exists.`);
        }
    }
    
    has(element){
        return this.iterables.includes(element);
    }
    
    del(element){
        let index = this.iterables.indexOf(element);
        if(index !== -1){
            this.iterables.splice(index, 1);
        }
    }
    
    length(){
        return `${this.iterable} length: ${this.iterables.length}`;
    }
    
    [Symbol.iterator](){
        let index = 0;
        const iterables = this.iterables;
        return{
            next: function(){
                if (index < iterables.length){
                    return {value: iterables[index++], done: false};
                }else{
                    return{done: true};
                }
            }
        }
    }

}

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length()); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5

/*EXAMPLE ANSWER
class MyIterable {
    constructor() {
        this.data = [];
    }

    get length() {
        return this.data.length;
    }

    has(n) {
        return this.data.includes(n);
    }

    add(n) {
        if(!this.has(n)) {
            this.data.push(n);
        }
    }

    del(n) {
        let index = this.data.indexOf(n);
        if(index !== -1) {
            this.data.splice(index, 1);
        }
    }

    [Symbol.iterator] = function* (){
        for(let index = 0; index<this.length; index++) {
            yield this.data[index];
        }
    }
}

*/
