const fs = require('fs');

//note this isn't actual json just js that looks like json
//dictionary is an object with a whole dictionary in it!
//it's big so be careful
const dictionaryObject = require('./dictionary.js');
const dictionary = dictionaryObject['dictionary'];

//awkward because it generates a rather large array
const getAllKeys = (obj) => {
  return Object.keys(dictionary);
}

dictWords = getAllKeys(dictionary);

fs.writeFileSync('allWords.js', dictWords);
