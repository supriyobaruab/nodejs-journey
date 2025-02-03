//Global object & Module system
// console.log(__dirname);
// console.log(__filename);
const _ = require('lodash');
const people = require('./People')
console.log(_.last(people.people));
console.log(people.a);
people.test();