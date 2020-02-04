var mongoose = require('mongoose');
var adminSeeder = require('./../models/admin.model');
var hash = require('password-hash');

mongoose.connect('mongodb://localhost/node-express-1',{ useNewUrlParser: true , useUnifiedTopology: true });
let adminSeederArray = [
    new adminSeeder({
        email    : 'example3@gmail.com',
        name     :  'abc4',
        password :  hash.generate('123456789'),
        address : 'Sai Gon',
        age : 18,
        avatar : null,
        role : 1
    }),
    new adminSeeder({
        email    : 'example4@gmail.com',
        name     :  'abc5',
        password :  hash.generate('123456789'),
        address : 'Sai Gon',
        age : 18,
        avatar : null,
        role : 1
    }),
    new adminSeeder({
        email    : 'example8@gmail.com',
        name     :  'abc6',
        password :  hash.generate('123456789'),
        address : 'Sai Gon',
        age : 18,
        avatar : null,
        role : 1
    })
]

let done = 0;
let status = '';
for (let i = 0; i < adminSeederArray.length; i++) {
    done++;
    status +='-';
    adminSeederArray[i].save(function(err,data){
        if (done == adminSeederArray.length) {
            status +='finish';
            exit();
        }
    })
    console.log(status);
}
function exit(){
    mongoose.disconnect();
}