// testing date-time on node.js

var moment = require('moment');
moment.updateLocale('en', {
    week : {
        dow : 1,
        doy : 7
     }
});

var meme = moment("2019-09-15");
var dream = moment("2019-09-14");
var team = moment("2019-09-08");

console.log(meme.weeks());
console.log(dream.weeks());
console.log(team.weeks());

// console.log(meme.week())
