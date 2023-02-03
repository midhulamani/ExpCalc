const fs = require("fs");
fs.readFile("hi.txt","utf8",function(error,data){
if(error) throw error;
console.log(data);
});
