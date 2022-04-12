const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var date = moment(); // create a date representing current point in time.
console.log(date.format('MMMM Do, YYYY'));
// date.add(1, 'month')
console.log(date.format('h:m'));

var createdAt = 1111234
var date = moment(createdAt)
console.log(date.format('h:mm'));

var someTimestamp = moment().valueOf()
console.log(someTimestamp);

