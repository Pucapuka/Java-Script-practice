/*
Declare a User class that will allow you to create objects with user information (first name, last name, email).

The data should be passed to the constructor and stored as private properties.

Create setters and getters to handle them. Use regular expressions to check if the data passed to the constructor or setter is in the correct format (first and last name consist of letters only, first letter upper-case, proper email address format). For simplicity, assume that an email address can only consist of letters, while strings of letters can be separated by dots.

For example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk will be invalid.

If data is incompatible with the format, do not save it and throw an exception (Error class) with an appropriate message.
*/


class User {
    #firstName;
    #lastName;
    #email;
    
    nameChecker(name){
        if(!/^[A-Za-z]+$/.test(name)){
            throw new Error("The name must be made only of letters.");
        }else if(!/^[A-Z]/.test(name.charAt(0))){
            throw new Error("The first letter must be capitalized.");
        }
        return name;
    }
    
    emailChecker(email){
        if(!/^[A-Za-z]+[@]+[A-Za-z]+(\.[A-Za-z]+)*$/.test(email)){
            throw new Error("Give an appropriate email.");
        }
        return email;
    }
    
    constructor(firstName, lastName, email){
        this.nameChecker(firstName);
        this.firstName = firstName;
        this.nameChecker(lastName)
        this.lastName = lastName;
        this.emailChecker(email);
        this.email = email;
    }   
    
    //getters
    getFirstName(){
        return firstName;
    }
    getLastName(){
        return lastName;
    }
    getEmail(){
        return email;
    }
    
    //setters
    setFirstName(newName){
        this.firstName = newName;
    }
    setLastName(newName){
        this.lastName = newName;
    }
    setEmail(newEmail){
        this.email = newEmail;
    }
}

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message);
}
