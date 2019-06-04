//implement
//make allWords.csv into something nice like an array
//https://www.npmjs.com/package/csvtojson

const fs = require('fs');

const csvFilePath='./allWords.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //console.log(jsonObj);
    fs.writeFileSync('allWords.json', jsonObj);
})

// Async / await usage
//const jsonArray=await csv().fromFile(csvFilePath);
