type User = {userName: String, userId: number}

let usrs: User[];
usrs= [];

let usr: User;
usr = {userName: "Naeem Biswass", userId: 12};

let usr1: User;
usr1 = {userName: "Guuuu", userId: 13};

usrs.push(usr1);
usrs.push(usr);

console.log(usrs);


type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";


function requestHandler (requestType: RequestType) {
    console.log(requestType);
}  

requestHandler("POST");

