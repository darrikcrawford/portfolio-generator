const fs = require('fs');

<<<<<<< HEAD
const generatePage = require('./src/page-template.js')
=======
const generatePage = require('./src/page-template');
>>>>>>> feature/capture-input

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});