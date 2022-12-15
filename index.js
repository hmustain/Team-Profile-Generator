// Include packages needed for this application. Went back to prev readme generator homework for guidance
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Engineer = require(`./lib/engineer`);
const Intern = require(`./lib/intern`);
const Manager = require(`./lib/manager`);

// Empty array for newHire
const newHire = [];

// function for cards <--- tutor helped me big time here
function employeeCards (employee){
    let extraInfo = ""
    if (employee.getRole() === "Manager") {
        extraInfo += "Office Number: " + employee.officenumber
    }
    else if (employee.getRole() === "Engineer") {
        extraInfo += "GitHub User: " + employee.gitHub
    }
    else if (employee.getRole() === "Intern") {
        extraInfo += "School: " + employee.school
    }
    return `        <div class="col s12 m4 l4">
    <div class="card emp-card">
      <div class="card-content emp-title">
        <span class="card-title emp-name">${employee.name}</span>
        <ul>
          <li id="emp-pos">${employee.getRole()}</li>
        </ul>
      </div>
      <div class="card-action emp-info">
        <ul class="collection">
          <li class="collection-item">ID: ${employee.getId()}</li>
          <li class="collection-item">Email: <a href="">${employee.getEmail()}</a>
            
          </li>
          <li class="collection-item">${extraInfo}</li>
        </ul>
      </div>
    </div>
  </div>
`
}

// Create an array of questions for user input using inquirer prompt. Again went back to prev homework on readme generator for guidance.
const generateHTML = () => {
    let cards = ""
    for (let i = 0; i < newHire.length; i++) {
        if (newHire[i].getRole() === "Manager") {
            cards += employeeCards(newHire[i])
        }
        else if (newHire[i].getRole() === "Engineer") {
            cards += employeeCards(newHire[i])
        }
        else if (newHire[i].getRole() === "Intern") {
            cards += employeeCards(newHire[i])
        }
    }
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- Compiled and minified CSS link -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header class="header">
      <h1 id="header-text">My Team</h1>
    </header>
    <div class="container">
      <div class="row">
      ${cards}
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>
`;
}
// use inquirer prompt to come up with a series of questions to ask user
inquirer
  .prompt([
    {
      type: `input`,
      name: `mgrname`,
      message: `What is your name? `,
      validate: (data) => {
        if (data) {
          return true;
        } else {
          return "You must enter information to continue";
        }
      },
    },
    {
      type: `input`,
      name: `mgrid`,
      message: `What is your id#? `,
      validate: (data) => {
        if (data) {
          return true;
        } else {
          return "You must enter information to continue";
        }
      },
    },
    {
      type: `input`,
      name: `mgremail`,
      message: `What is your email address? `,
      validate: (data) => {
        if (data) {
          return true;
        } else {
          return "You must enter information to continue";
        }
      },
    },
    {
      type: `input`,
      name: `officenumber`,
      message: `What is your office number? `,
      validate: (data) => {
        if (data) {
          return true;
        } else {
          return "You must enter information to continue";
        }
      },
    },
  ])

  // see if i can create just 1 mgr card to start
  .then((answers) => {
    const newManager = new Manager(
      answers.mgrname,
      answers.mgrid,
      answers.mgremail,
      answers.officenumber
    );
    newHire.push(newManager);
    menu();
  });

// functions for newhires
function newEngineer() {
  inquirer
    .prompt([
      {
        type: `input`,
        name: `engname`,
        message: `What is your name? `,
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
      {
        type: `input`,
        name: `engid`,
        message: `What is your id#? `,
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
      {
        type: `input`,
        name: `engemail`,
        message: `What is your email address? `,
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is your github user name?",
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.engname,
        answers.engid,
        answers.engemail,
        answers.github
      );
      newHire.push(newEngineer);
      menu();
    });
}

function newIntern() {
    inquirer
    .prompt([
      {
        type: `input`,
        name: `intname`,
        message: `What is your name? `,
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
      {
        type: `input`,
        name: `intid`,
        message: `What is your id#? `,
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
      {
        type: `input`,
        name: `intemail`,
        message: `What is your email address? `,
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school did you attend?",
        validate: (data) => {
          if (data) {
            return true;
          } else {
            return "You must enter information to continue";
          }
        },
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.intname,
        answers.intid,
        answers.intemail,
        answers.school
      );
      newHire.push(newIntern);
      menu();
    });

}

function buildTeam() {
    console.log(newHire);
  const managerContent = generateHTML();
    console.log(managerContent);
  fs.writeFile("index.html", managerContent, "UTF-8", (err) =>
    err ? console.log(err) : console.log("Successfully created HTML file")
  );
}

function menu() {
    inquirer
    .prompt([
      {
        type: `list`,
        name: `menu`,
        message: `From the options listed below, please choose how to proceed `,
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building my team",
        ],
      },
    ])
    .then((answers) => {
      if (answers.menu === "Add an engineer") {
        newEngineer();
      } else if (answers.menu === "Add an intern") {
        newIntern();
      } else {
        buildTeam();
      }
    });

}
