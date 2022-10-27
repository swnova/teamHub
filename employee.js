const { getRandomValues } = require("crypto");

class Employee {
    constructor(id, name, email,) {
    this.id=id;
    this.name=name;
    this.email=email;
    
    }
    
    getRole(){
        return 'Employee';
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }

    
}
