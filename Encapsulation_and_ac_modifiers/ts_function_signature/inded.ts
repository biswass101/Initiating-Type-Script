let userInfo1 : () => void;
let userInfo2 : (name: string) => void;
let userInfo3 : (name: string, age: number) => string;


userInfo1 = () => {
    console.log('I am 24 years old');
}

userInfo2 = (name: string) => {
    console.log(`${name} is 24 years old`);
}

userInfo3 = (name: string, age: number) => {
    return `${name} is ${age} years old`;
}

userInfo1();
userInfo2("Niloy Biswass");
console.log(userInfo3("Niloy Biswass", 24));