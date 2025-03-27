const  printUserId = <X, Y>(usrId: X, userAge: Y) => {
    console.log(`ID: ${usrId}, AGE: ${userAge}`);
}

printUserId('101', 20);
printUserId(101, "20");
