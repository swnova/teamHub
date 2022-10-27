const inquirer = require("inquirer");
const fs = require('fs');

const newEmployee = ()=>{
    inquirer.prompt([
        {
            name: "typeEmployee",
            type:"list",
            message:"What team member are we adding?",
            choices:['manager', 'engineer','intern',]
        },
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
            name: 'employeeGithub',
            type: 'input',
            message: 'what is the Github username?'
        },
        {
            name: 'addMore',
            type: 'list',
            choices:['add another employee', 'finish']
        }
    ]).then(ans => {
        console.log()
        // if(ans.startWork==="engineer"){ 
        //     addEngineer(); 
        // } if(ans.startWork==="intern"){
        //     addIntern();
        // }if (ans.startWork==="finish"){
        //     generatePage();
        // }
    
    })
    
}
newEmployee()