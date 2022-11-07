const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(id, name, email, role, github) {
    super(id, name, email)
    this.role=role;
    this.github=github;
    }
    
    getRole(){
        return this.role
    }

    getGithub(){
        return this.github

    }
}
    
module.exports = Engineer;