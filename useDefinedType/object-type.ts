//type-1:
let user3: {name: string, userId: number}

user3 = {
    name : "Naeem Bs",
    userId: 11,
}

//type-2
let cars: Object[]
cars = [
    {
        id: 1,
        name: "Ferrari"
    },
    {
        id: 2,
        name: "Nissan"
    }
]

//type-3
let user4: {name: string, userId?: number}

user4 = {
    name : "Naeem Bs",
}

//type-4(Mixed):
let users: object[];
let userr: {name: string, userId: number};
let userr1: {name: string, userId: number};

users = [];
userr = {
    name: "kakashi",
    userId: 1
}
userr1 = {
    name: "Ratuli",
    userId: 2
}
users.push(userr);
users.push(userr1);

for(const key in users) console.log(users[key]);

console.log(users);