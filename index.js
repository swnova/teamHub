const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/employee.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const teamArr = [];
const teamTemp = require('./src/template');


const start = ()=>{
inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            message: 'what is this employees role?',
            choices: ['employee','intern', 'manager', 'engineer', 'finished']
        }
    ]).then(ans => {
        switch(ans.role) {
            case "manager":
                newManager()
                break;
            case "intern":
                newIntern()
                break;
            case "engineer":
                newEngineer()
                break;
            case "employee":
                newEmployee()
                break;
            default :
                generateTeam()
                break;
            
            // default:
            //     console.log(`creating team member`)
            //     break;
        }
       
    })
   
}

const newEmployee = ()=>{
    inquirer.prompt([
        {
            name: 'employeeName',
            type: 'input',
            message: 'What is the employees name?',
        },
        {
            name: 'employeeEmail',
            type: 'input',
            message: 'What is the employees email address?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'what is the id number?'
        }
    ]).then(ans =>{
        const employee = new Employee(ans.employeeName, ans.employeeEmail, ans.id);
        teamArr.push(employee);
        console.table(teamArr);
    start()
    })
}

const newIntern = ()=>{
    inquirer.prompt([
        {
            name: 'employeeName',
            type: 'input',
            message: 'What is the name?',
        },
        {
            name: 'employeeEmail',
            type: 'input',
            message: 'What is the email address?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'what is the id number?'
        },
        {
            name: 'schoolSel',
            type:'input',
            message: 'What school are you coming from?'
        
        }

    ]).then(ans=>{
        const intern = new Intern(ans.employeeName, ans.employeeEmail, ans.id, ans.schoolSel);
        teamArr.push(intern);
        console.table(teamArr);
    start()
    })
}


const newEngineer = ()=>{
    inquirer.prompt([
        {
            name: 'employeeName',
            type: 'input',
            message: 'What is the name?',
        },
        {
            name: 'employeeEmail',
            type: 'input',
            message: 'What is the email address?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'what is the id number?'
        },
        {
            name: 'github',
            type: 'input',
            message: 'what is your github username?'
        }
    ]).then(ans =>{
        const engineer = new Engineer(ans.employeeName, ans.employeeEmail, ans.id, ans.github)
        teamArr.push(engineer)
        console.table(teamArr);
    start()
    })
        
}

const newManager = ()=>{
    inquirer.prompt([
        {
            name: 'employeeName',
            type: 'input',
            message: 'What is the name?',
        },
        {
            name: 'employeeEmail',
            type: 'input',
            message: 'What is the email address?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'what is the id number?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'what is the office number for this manager?',
        }
    
    ]).then(ans=>{
        const manager = new Manager(ans.employeeName, ans.employeeEmail, ans.id, ans.officeNumber)
        teamArr.push(manager)
        console.table(teamArr);
    start()
    })
}

// function to write HTML



const writeFile = (data) =>{
    fs.writeFile('./dist/teams.html', data, (err)=>{
        if(err) {
            console.log(err);
        } else {
        console.log('Your team has been generated.');
        }
    })
}

generateTeam= ()=> {
    writeFile(teamTemp(teamArr))
   
}
start()