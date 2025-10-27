//const xyz = require('./content');

//console.log(xyz.people, xyz.ages, xyz.occupations);

const {people, ages, occupations} = require('./content');

console.log(people, ages, occupations);

const os = require('os');

console.log(os.platform(), os.homedir());