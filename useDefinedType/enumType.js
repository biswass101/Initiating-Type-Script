//enum - store constant; duplicate value is not allowed here
//enum types: numeric, string, hetergenous
//numetic enum:
var RequrstType;
(function (RequrstType) {
    RequrstType[RequrstType["readData"] = 0] = "readData";
    RequrstType[RequrstType["saveData"] = 1] = "saveData";
    RequrstType[RequrstType["deleteData"] = 2] = "deleteData";
})(RequrstType || (RequrstType = {}));
console.log(RequrstType);
console.log(RequrstType.deleteData);
