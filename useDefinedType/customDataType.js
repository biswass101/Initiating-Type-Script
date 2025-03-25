var usrs;
usrs = [];
var usr;
usr = { userName: "Naeem Biswass", userId: 12 };
var usr1;
usr1 = { userName: "Guuuu", userId: 13 };
usrs.push(usr1);
usrs.push(usr);
console.log(usrs);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
