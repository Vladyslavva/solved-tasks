function vowelFilter (letters) {
  var vowels = ["a", "e", "i", "o", "u"];

  for(let i = 0; i < letters.length; i++){
    if(vowels.includes(letters[i])){
      letters.splice(i--, 1);

    }
    console.log(letters[i]);
  }
  return letters;

};

let abc = vowelFilter(["i", "s", "e", "a", "w", "e", "m"]);
console.log(abc);