// Create a group of tests to test out to see if the properties and methods i set up in the lib folder are setup properly and working. For this "Intern Test Folder" We will test out to see if Intern name, id, email which came over previously from employee as well as the new parameter created school is functioning properly by calling that specific property with the method we created ie getName() should return the name I enter getId() should return the id i enter, getEmail() should return the email i enter getSchool() should return the school i enter and getRole() should return the role of the employee in this case it should override and become intern. Day 2 talked about how to write tests, so I went back to day 2, along with documentation and youtube videos and help from Tutor and askbcs to write test. Also note in order to run test I had to instal jest by putting npm i jest in the terminal https://www.npmjs.com/package/jest

// Import the intern.js file
const Intern = require(`../lib/intern`);

// Create a new intern to use as a test study include 'name, id, email, and school'
const newIntern = new Intern (`Hunter`, 123456, 'hunter@testemail.com', 'The University of Arkansas');

// Code the test using the previously defined parameters for employee and add the extra parameter for intern
it(`should display name, id, email, school` , () =>{
    expect(newIntern.name).toEqual('Hunter');
    expect(newIntern.id).toEqual(123456);
    expect(newIntern.email).toEqual('hunter@testemail.com');
    expect(newIntern.school).toEqual('The University of Arkansas');
});

it(`should be able to get name from the getName() method name should be hunter`, () => {
    expect(newIntern.getName()).toEqual('Hunter');
});

it(`should be able to get id from the getId() method id should be 123456` , () => {
    expect(newIntern.getId()).toEqual(123456);
});

it(`should be able to get email from getEmail() method email should be hunter@testemail.com` , () => {
    expect(newIntern.getEmail()).toEqual('hunter@testemail.com');
});

it(`should be able to get school from getschool() method. school should be the university of arkansas` , () => {
    expect(newIntern.getOfficeNumber()).toEqual('The University of Arkansas');
});

it(`should be able to get the employees role using the getRole() in this case it should be intern` , () => {
    expect(newIntern.getRole()).toEqual('Intern');
});