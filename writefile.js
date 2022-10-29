const fs = require('fs');

const writeFile = (employeeInfo) =>{
    fs.writeFile('./dist/teams.html', employeeInfo, (err)=>{
        if(err) {
            console.log(err);
        } else {
        console.log('Your team has been generated.');
        }
    })
}

module.exports = writeFile;