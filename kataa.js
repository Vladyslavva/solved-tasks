function vowelFilter (letters) {
  let vowels = ["a", "e", "i", "o", "u"];

  for(let i = 0; i < letters.length; i++){
    if(vowels.includes(letters[i])){
      letters.splice(i--, 1);

    }
    console.log(letters[i]);
  }
  return letters;

}

function vowelFilter1 (letters) {
  let vowels = ["a", "e", "i", "o", "u"];

  for(let i = 0; i < vowels.length; i++){
    if(letters.includes(vowels[i])){
      while(letters.indexOf(vowels[i]) != -1){
        letters.splice(letters.indexOf(vowels[i]), 1);
      }

    }
    console.log(letters[i]);
  }
  return letters;

}



let abc = vowelFilter(["i", "s", "e", "a", "w", "e", "m"]);
console.log(abc);