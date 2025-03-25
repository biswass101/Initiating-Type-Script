//Hellow TrypeScript Bhai.....
let songKha: number;
let bakko: string;
let hoNa: boolean;
let folErNam: Array<string | number | boolean>;

folErNam = ["1", "2", 20, true];

bakko = "Kire Bhai ki khobor?";
songKha = 10;
hoNa = (10 < 11) //true and false as well!

console.log(hoNa)



//Object Type:
let obj1: {name: String, age: number};
obj1 = {
    name: "Naeem Biswass",
    age: 12,
}

//Array of Objects:
let objs: object[];
objs = [
    obj1,
    {
        name: "Guru Kull",
        age: 100,
    },
    {
        name: "Jagar Ali",
        age: 29,
    },
    {
        name: "Guru Afifa",
        age: 12
    }
]

// for(let obj of objs) {
//     console.log(obj);
// }

type Car = {name: string, color: string, seats: number};

let myCar: Car;
myCar = {
    name: "Ferrari",
    color: "Blue",
    seats: 2
}
