const date = require ("date-and-time");
var fs = require('fs');
const path = require("path")
const directory = process.cwd();



const now = new Date();
const value = date.format(now, 'DD-MM-YYYY,HH-mm-ss');
console.log(value)

fs.writeFile(path.join(directory  ,`/${value}.txt`), `${value}`, function (err) {
    if (err){
        return console.log(err);
    }
    console.log("File Created")
})

fs.readFile(`${directory}/${value}.txt`,"utf-8",function(err,data){
    if(err) throw err;
    console.log(data);
})

