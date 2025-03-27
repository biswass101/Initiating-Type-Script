//Hellow TrypeScript Bhai.....
var songKha;
var bakko;
var hoNa;
var folErNam;
folErNam = ["1", "2", 20, true];
bakko = "Kire Bhai ki khobor?";
songKha = 10;
hoNa = (10 < 11); //true and false as well!
console.log(hoNa);
//Object Type:
var obj1;
obj1 = {
    name: "Naeem Biswass",
    age: 12
};
//Array of Objects:
var objs;
objs = [
    obj1,
    {
        name: "Guru Kull",
        age: 100
    },
    {
        name: "Jagar Ali",
        age: 29
    },
    {
        name: "Guru Afifa",
        age: 12
    }
];
var myCar;
myCar = {
    name: "Ferrari",
    color: "Blue",
    seats: 2
};
var appartMents;
appartMents = [];
var farukVilla;
farukVilla = {
    name: "Faruk Villa",
    appartType: "Building",
    floor: 20,
    address: "Thana Road, Savar, Dhaka",
    isCompleted: true
};
appartMents.push(farukVilla);
var matiurRahmanScl;
matiurRahmanScl = {
    name: "Matiur Rahman School",
    appartType: "Building",
    floor: 3,
    address: "Dendabor New Para, Paddibuddyt, Savar, Dhaka",
    isCompleted: true
};
appartMents.push(matiurRahmanScl);
appartMents.map(function (appartMent) { return console.log(appartMent); });
var getAppartMents = function (appartMent) {
    return appartMent;
};
console.log(getAppartMents(appartMents));
