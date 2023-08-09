
const fs = require("fs");

fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        console.log(`Error in Deleting ${err}`)
    }else{
        console.log("File Deleted SuccessFully")
    }
})