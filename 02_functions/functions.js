"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // also you can not use the methos's of other data type
    return num + 2;
}
addTwo(5); // you can not pass other datatype hear b/s the datatype is allready defaind 
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("kushal");
function signUpUser(name, email, isPaid) {
}
signUpUser("kushal", "kushal@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // set false by default
loginUser("vk", "vk@gmail.com");
