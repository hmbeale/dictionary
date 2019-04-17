/*

//compares user input against randKey
stdin.addListener("data", function(d) {
    console.log(randKeyArr);
    console.log(d.toUpperCase());

    console.log(randKeyArr.includes(d.toUpperCase()))
    if (randKeyArr.includes(d.toUpperCase())){
      console.log(`yes there is a(n) ${d}`);
    }
    //input does not contain
    if (!randKeyArr.includes(d.toUpperCase())){
      console.log(`there is not a(n) ${d}`);
    }
    //success condition
    if (1 == 2){
      process.exit();
    }
  });

const arrIncludes = (arr, element) => {
  for (i = 0; i<arr.length; i++){
    if (arr[i] == element){
      return i;
    }
  }
  return false;
}

const printStars = (word) => {
  let response = [];
  for (let i = 0; i<word.length; i++){
    response.push('*');
  }
  return response;
}

console.log(printStars(randKey));

//console.log(randDefinition);
//console.log(dictionary[Object.keys(dictionary)[Object.keys(dictionary).length * Math.random() <<0]]);


//console.log(dictionary.LOMBARD);

const randomProperty = (obj) => {
    const keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

const randDefinition = randomProperty(dictionary);

//import dictionary2 from './dictionary2.js';

//console.log(dictionary); //really long

console.log(dictionary["DIPLOBLASTIC"]);
//console.log(dictionary[DIPLOBLASTIC]);

//console.log(dictionary."DIPLOBLASTIC");
console.log(dictionary.DIPLOBLASTIC);

console.log(typeof dictionary);
//it's an object

//console.log(Object.keys(dictionary).length)
//console.log(dictionary[Object.keys(dictionary)[0]]);

console.log(dictionary[0]); //undefined
console.log(Object.keys(dictionary));

*/
