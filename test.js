function isPangram(pangram) {
  let res = '';
  for( let i = 0; i < pangram.length; i++){
    if(isItPangram(pangram[i].toLowerCase())) res = res + '1';
    else res = res + '0';
  }
  return res;
}

function isItPangram(str){
  let abc = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for(let i = 0; i < abc.length; i++){
    if((str.indexOf(abc[i]) === -1)) return false;
  }
}

console.log(isPangram(['we promptly judged antique ivory buckles for the next prize', 'we promptly judged antique ivory buckles for the prizes']))

