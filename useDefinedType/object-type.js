//type-1:
var user3;
user3 = {
    name: "Naeem Bs",
    userId: 11
};
//type-2
var cars;
cars = [
    {
        id: 1,
        name: "Ferrari"
    },
    {
        id: 2,
        name: "Nissan"
    }
];
//type-3
var user4;
user4 = {
    name: "Naeem Bs"
};
//type-4(Mixed):
var users;
var userr;
var userr1;
users = [];
userr = {
    name: "kakashi",
    userId: 1
};
userr1 = {
    name: "Ratuli",
    userId: 2
};
users.push(userr);
users.push(userr1);
for (var key in users)
    console.log(users[key]);
console.log(users);
