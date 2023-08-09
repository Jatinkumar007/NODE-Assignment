const fs = require("fs");


fs.readFile('nodejs_architecture.txt',function(err,data){
    if(err){
        console.log("Getting some Error While reading file : ",err)
    }else{
        console.log(data.toString());
    }
})

