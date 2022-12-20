// Include packages needed for this application. Went back to prev readme generator homework for guidance
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Engineer = require(`./lib/engineer`);
const Intern = require(`./lib/intern`);
const Manager = require(`./lib/manager`);
// const { renderIcon } = require("./src/generateIcon");

// Empty array for newHire
const newHire = [];

// function for cards <--- tutor helped me big time here
function employeeCards(employee) {
    let extraInfo = "";
    let icon = "";
    if (employee.getRole() === "Manager") {
        extraInfo += "Office Number: " + employee.officeNumber
        icon += `fas fa-coffee' style="font-size: 20px; color:#0c2340"`;
    } else if (employee.getRole() === "Engineer") {
        extraInfo += `GitHub User: <a href="https://www.github.com/${employee.gitHub}">${employee.gitHub}</a>`
        icon += `fas fa-glasses' style="font-size: 20px; color:#0c2340"`;
    } else if (employee.getRole() === "Intern") {
        extraInfo += "School: " + employee.school
        icon += `fas fa-graduate' style="font-size: 20px; color:#0c2340"`;
    }
    return `        <div class="col s12 m6 l4">
    <div class="card emp-card">
      <div class="card-content emp-title">
        <span class="card-title emp-name">${employee.name}</span>
        <ul>
        <li><i class='${icon}' id="emp-pos"> ${employee.getRole()}</i></li>
        </ul>
      </div>
      <div class="card-action emp-info">
        <ul class="collection">
          <li class="collection-item">ID: ${employee.getId()}</li>
          <li class="collection-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            
          </li>
          <li class="collection-item">${extraInfo}</li>
        </ul>
      </div>
    </div>
  </div>
`;
}

// Create an array of questions for user input using inquirer prompt. Again went back to prev homework on readme generator for guidance.
const generateHTML = () => {
    let cards = "";
    for (let i = 0; i < newHire.length; i++) {
        if (newHire[i].getRole() === "Manager") {
            cards += employeeCards(newHire[i]);
        } else if (newHire[i].getRole() === "Engineer") {
            cards += employeeCards(newHire[i]);
        } else if (newHire[i].getRole() === "Intern") {
            cards += employeeCards(newHire[i]);
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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"> 
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
};
// use inquirer prompt to come up with a series of questions to ask user
inquirer
    .prompt([
        {
            type: `input`,
            name: `mgrname`,
            message: `What is the manager's name? `,
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
            message: `What is the manager's employee id#? `,
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
            message: `What is the manager's email address? `,
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
            message: `What is the manager's office number? `,
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
                message: `What is the engineer's name? `,
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
                message: `What is the engineer's employee id#? `,
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
                message: `What is the engineer's email address? `,
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
                message: "What is the engineer's github user name?",
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
                message: `What is the intern's name? `,
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
                message: `What is the intern's employee id#? `,
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
                message: `What is the intern's email address? `,
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
                message: "What school did the intern attend?",
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
