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
// extraInfo will be the additional question based of job title starts off as empty string
// icon will be the icon that goes next to job title, dependant on job title, starts out as empty
// if statement saying if the employee role is manager then add the users office number to extraInfo and put the manager icon next to manager (this practice continues through the remaining 2 job titles)
// once the if statements are done you we are going to return the template for my html using string templates to place the dynamically created information in the correct spots

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
        icon += `fa fa-graduation-cap' style="font-size: 20px; color:#0c2340"`;
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
// creating a for loop for the generateHTML function
// cards is what all the information will go into
// start with empty string
// increase newHire by 1 every time
// if newHire role is manager we are going to add that role to employee cards and increase the cards by 1 and so on and so forth
// once we loop and run through the if statements we are dynamically placing these cards using template literals in the html template below
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
// use inquirer prompt to come up with a series of questions to ask user first list of questions is always the manager
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
    // once manager questions are done we are going to take those answers and apply them to the const new Manger we will initiate the menu() function when done to allow the user to select what they want to do next
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

// functions for newhires first being engineer. if user selects engineer they will be prompted with the below series of questions and again the menu() function is executed when the questions are done. we also push the answers into the newEngineer const
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

// same thing for manager and engineer, if user selects intern, the series of questions for intern are asked, answers pushed into new const newEngineer and menu() executed again. this process will happen over and over and over again until the user selects build team
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

// once user is finished building team, and selects finish building team, the code is going to take all of the answers and create a managerContent const and execute the generateHTML function that we built earlier in the code. this will write the file as an index.html function taking everything in managerContent (this could have been called something different but i never changed it after just 1st getting the manger to work). If it works, you will get the message "successfully created HTML file, if it does not work you will get an error"
function buildTeam() {
    console.log(newHire);
    const managerContent = generateHTML();
    console.log(managerContent);
    fs.writeFile("index.html", managerContent, "UTF-8", (err) =>
        err ? console.log(err) : console.log("Successfully created HTML file")
    );
}

// menu function created below, will be called after the end of each series of questions. Simple prompt to ask the user what they would like to do next with an if statement calling which particular function to execute based off of what the user selects
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
