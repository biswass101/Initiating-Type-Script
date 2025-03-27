interface Iuser {
    id: number,
    name: string,
    age: number
}

let users: Iuser[] = [];
let user1: Iuser = {
    id: 1,
    name: "Niloy",
    age: 24
};
let user2: Iuser = {
    id: 2,
    name: "Mr Tomatto",
    age: 24
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: Iuser) => {
    console.log(`userId: ${user.id}, userName: ${user.name}, userAge: ${user.age}`);
};

users.forEach(user => printUserInfo(user));

