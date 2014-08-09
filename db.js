var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coursefinder');


var Comment = mongoose.model('comments2', {
    uniName: String,
    courseName: String,
    courseDescription: String

});

var myComment = new Comment({
    uniName: 'Kings College',
    courseName: 'Management',
    courseDescription: 'Fuck kings college it sucked ass'

})

myComment.save(function(err){
    if(err) throw err;
    console.log('Commit complete');
})

exports.listCustomers = function () {
    return mongoose;
};

exports.addCustomer = function (uniname,coursename,coursedescription) {


};



exports.getCustomerById = function (id) {
    return mongoose[id];
};

exports.deleteCustomer = function (id) {
    mongoose[id].remove();
};

exports.updateCustomer = function (customer) {
    mongoose[customer.id] = customer;
}
