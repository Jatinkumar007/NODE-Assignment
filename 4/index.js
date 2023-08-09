const fs = require("fs");

fs.appendFile('nodejs_architecture.txt','Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node id can easily handle multiple client requests without requiring multiple threads, consuming less memory and resoureces. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and Non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resourcces. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks makes the development process easier.','utf-8',function(err){
    if(err){
        console.log("Error: ",err)
    }else{
        console.log("successfully appending file!")
    }
})

const data = fs.readFileSync('nodejs_architecture.txt');
console.log(data.toString());