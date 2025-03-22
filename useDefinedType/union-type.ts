let userId1: string | number | boolean;
userId1 = "gu";
userId1 = 10
userId1 = true
console.log(userId1);


function displayUserInfo(userId: string | number) {
    console.log(userId)
}

displayUserInfo("343401");
displayUserInfo(10);
