/*
Create a Users class that will allow you to create objects containing a collection of individual users (users are created using the User class from the previous task).

To create a collection, use a Map class (the key should be the email address, and the value should be the User object). The class should provide the following methods:

add – add a single user, arguments are name, surname and email;
delete - remove the user from the collection (the argument is the email)
get - retrieve a single user from the collection (the argument is the email)
getAll - retrieve all users from the collection (the argument is the name of the field by which the array is to be sorted: name, surname, or email
*/

//MY SOLUTION
const nameRegex = /^[A-Z][a-z]*$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
class Users{
    #name;
    #surname;
    #email;
    #userList = [];
    
    constructor(name, surname, email){
        this.#name = name;
        this.#surname = surname;
        this.#email = email;
    }
    
    getName(){
        return this.#name;
    }
    
    setName(newName){
        this.#name = newName;
    }
    
    getSurname(){
        return this.#surname;
    }
    
    setSurname(newSurname){
        this.#surname = newSurname;
    }
    
    getEmail(){
        return this.#email;
    }
    
    setEmail(newEmail){
        this.#email = newEmail;
    }
    
    add(name, surname, email){
        const user = new Users(name, surname, email);
        this.#userList.push(user);
    }
    
    get(identifier) {
        if (nameRegex.test(identifier)) {
            return this.#userList.find(user => user.getName() === identifier || user.getSurname() === identifier);
        }
        else if (emailRegex.test(identifier)) {
            return this.#userList.find(user => user.getEmail() === identifier);
        }
        return null;
    }

    toString() {
        return `Name: ${this.getName()}, Surname: ${this.getSurname()}, Email: ${this.getEmail()}`;
    }

    // Get all users by a specified property (name, surname, or email)
    getAll(property) {
        return this.#userList.map(user => user[`get${property.charAt(0).toUpperCase() + property.slice(1)}`]());
    }
}


//TESTING THE CLASS
let users = new Users();

users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");

const userByEmail = users.get("dddd@gmail.com");
console.log(userByEmail ? userByEmail.toString() : "User not found."); 

const userByName = users.get("Aaaa");
console.log(userByName ? userByName.toString() : "User not found.");  

const userBySurname = users.get("Bbbb");
console.log(userBySurname ? userBySurname.toString() : "User not found.");

console.log(users.getAll("name"));   
console.log(users.getAll("surname"));
console.log(users.getAll("email"));  


//THE SAMPLE SOLUTION

/*
class Users {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(name, surname, email) {
        try{
            this.#users.set(email, new Users(name, surname, email));
        } catch(e) {
            console.log(e.message);
        }
    }

    delete(email) {
        return this.#users.delete(email);
    }

    get(email) {
        return this.#users.get(email);
    }

    getAll(sortBy) { //name,surname,email
        return [...this.#users].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
    }
}

//TESTING THE CLASS
let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));


The problem of 'undefined' is present in this code, as it was in mine. The solution was changing the test approach, using a toString() method and passing it in the test as 
it is in my solution above.
*/
