const fs = require('fs');

// fs.writeFileSync('myFile.txt','hello guys');
// fs.appendFileSync('myFile.txt',' How are you?');
//read file
fs.readFile ('myfile.txt',(err,data)=>{
console.log(data.toString());
});