class Employee {
    constructor(id, name, email, role) {
    this.id=id;
    this.name=name;
    this.email=email;
    this.role=role;
    
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

module.exports = Employee;