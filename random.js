//note this isn't actual json just js that looks like json
//dictionary is an object with a whole dictionary in it!
//it's big so be careful
const dictionaryObject = require('./dictionary.js');
const dictionary = dictionaryObject['dictionary'];

//awkward because it generates a rather large array
const randomKey = (obj) => {
  const keys = Object.keys(dictionary);
  return keys[keys.length * Math.random() << 0];
}

const randKey = randomKey(dictionary);
const randKeyProperty = dictionary[randKey];

exports.randKey = randKey;
exports.randKeyProperty = randKeyProperty;
