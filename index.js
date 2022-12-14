// Include packages needed for this application. Went back to prev readme generator homework for guidance
const inquirer = require(`inquirer`);
const fs = require (`fs`);
const Engineer = require (`./lib/engineer`);
const Intern = require (`./lib/intern`);
const Manager = require (`./lib/manager`);


// Create an array of questions for user input using inquirer prompt. Again went back to prev homework on readme generator for guidance. 
const generateHTML = ({mgrname, mgremail, mgrid, mgroffice}) => 

`<!DOCTYPE html>
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
        <div class="col s12 m4 l4">
          <div class="card emp-card">
            <div class="card-content emp-title">
              <span class="card-title emp-name">${mgrname}</span>
              <ul>
                <li id="emp-pos"></li>
              </ul>
            </div>
            <div class="card-action emp-info">
              <ul class="collection">
                <li class="collection-item">Employee ID: ${mgrid}</li>
                <li class="collection-item">Email: <a href="${mgremail}">${mgremail}</a>
                  
                </li>
                <li class="collection-item">Office Number: ${mgroffice}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>
`

// use inquirer prompt to come up with a series of questions to ask user
inquirer
    .prompt([
        {
            type: `input`,
            name: `mgrname`,
            message: `What is the team manager's name? `,
            validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
        },
        {
            type: `input`,
            name: `mgrid`,
            message: `What is the team manager's employee id #? `,
            validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
        },
        {
            type: `input`,
            name: `mgremail`,
            message: `What is the team manager's email address? `,
            validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
        },
        {
            type: `input`,
            name: `mgroffice`,
            message: `What is the team manager's office number? `,
            validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
        },
        // {
        //     type: `list`,
        //     name: `menu`,
        //     message: `From the options listed below, please choose how to proceed `,
        //     choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        // }
    ])

    // see if i can create just 1 mgr card to start
    .then((answers) => {
        const managerContent = generateHTML(answers);

        fs.writeFile('index.html', managerContent, "UTF-8", (err) => err ? console.log(err) : console.log('Successfully created HTML file'));
    });