const fs = require('fs');
const Employee = require('../lib/employee');



var teamTemp = (team) =>{
  var managerCard = (managerData)=>{
    return `<div class="card">
    <img class="card-img-top" img src="./assets/manager.png" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-title">MANAGER</h2>


      <h5 class="employee-name">${managerData.name}</h5>
      <h5 class="employee-id">${managerData.id}</h5>
      <p class="card-text">${managerData.email} office number:${managerData.officenumber}</p>
    </div>
  </div>`
  }
  var engineerCard = (engineerData)=>{
    return `<div class="card">
    <img class="card-img-top"  img src="./assets/engineer.png"  alt="Card image cap">
    <div class="card-body">
      <h2 class="card-title">ENGINEER</h2>
      
      <h5 class="employee-name"> ${engineerData.name} </h5>
      <h5 class="employee-id"> ${engineerData.id} </h5>
      <p class="card-text">${engineerData.email}</p>
    </div>
  </div>`
  }
  var internCard = (internData)=>{
    return `<div class="card">
    <img class="card-img-top" img src="./assets/intern.png" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-title">INTERN</h2>

      <h5 class="employee-name">${internData.name}</h5>
      <h5 class="employee-id">${internData.id}</h5>
      <p class="card-text">email:${internData.email} school:${internData.school}</p>
    </div>
  </div>`
  }
  var employeeCard = (employeeData)=>{
    return `<div class="card">
    <img class="card-img-top" img src="./assets/employee.png" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-title">EMPLOYEE</h2>

      <h5 class="employee-name">${employeeData.name}</h5>
      <h5 class="employee-id">${employeeData.id}</h5>
      <p class="card-text">${employeeData.email}</p>
    </div>
  </div>`
  } 
  var finalCard = [];
for (var i = 0; i < team.length;i++){
  if (team[i].getRole()==='Manager'){
    finalCard.push(managerCard(team[i]))
  } 
  if (team[i].getRole()==='Engineer'){
    finalCard.push(engineerCard(team[i]))

  }
  if (team[i].getRole()==='Intern'){
    finalCard.push(internCard(team[i]))
  }
  // if (team(i).getRole()==='Employee'){
  //   finalCard.push(employeeCard(team[i]))
  // }
}

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 text-center">My Team</h1>
            </div>
          </div>
    </header>
        <div class="container-fluid">
            
            <div class="card-deck">
                ${finalCard}

                  

    
            </div>



        </div>
</body>
</html>`}

module.exports = teamTemp;