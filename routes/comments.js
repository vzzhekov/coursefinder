var db = require('../db');


var newComment1 = db.addCustomer('Kings College', 'Management Foundations', 'it sucked');
console.log(newComment1);
//
//newComment1.save(function(err) {
//    if(err) throw err;
//    console.log('Commet was submited');
//});
