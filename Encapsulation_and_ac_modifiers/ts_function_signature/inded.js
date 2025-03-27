var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log('I am 24 years old');
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 24 years old"));
};
userInfo3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
userInfo1();
userInfo2("Niloy Biswass");
console.log(userInfo3("Niloy Biswass", 24));
