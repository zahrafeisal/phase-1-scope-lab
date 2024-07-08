// Write your solution in this file!
var customerName = 'bob'
console.log(customerName)


function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}
// upperCaseCustomerName();
customerName = 'bob'


var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer;
}
// setBestCustomer();
bestCustomer;


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}
// overwriteBestCustomer();
bestCustomer;


const leastFavoriteCustomer = 'tim'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'matthew';
    return leastFavoriteCustomer;
}
console.log(changeLeastFavoriteCustomer());