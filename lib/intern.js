const Employee = require('./Employee');
class Intern extends Employee {
    constructor(id, name, email, role, school) {
        super(id, name, email);
        this.role=role;
        this.school=school;
    }
    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}
module.exports = Intern