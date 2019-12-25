# solved-tasks
#### Parse float
```javascript
function parseF(s) {
  if (typeof s !== "string" && s !== 0) return null;
  if(isNaN(parseFloat(s))) return null;
  else return parseFloat(s);
}
```

#### Filling an array (part 1)
```javascript
function arr (N){
const newArr = [];
 for (let i = 0; i < N; i++){
   newArr.push(i);
   }
   return newArr;
}
```

#### What is type of variable?
```javascript
function type(value) {
 return {}.toString.call(value).split(' ')[1].toLowerCase().slice(0, -1);
}
```

#### Is every value in the array an array?
```javascript
const arrCheck = a => a.every(Array.isArray) ;
```

#### Divide and Conquer
```javascript
function divCon(x){
  let count1 = 0;
  let count2 = 0;
  for(let i = 0; i < x.length;  i++){
    if(typeof x[i] === "string") count1 += +x[i];
    else if( typeof x[i] === "number") count2 += x[i];
  }
  return count2 -count1;
}
```

#### Find Maximum and Minimum Values of a List
```javascript
var min = function(list){
  let min = list[0];
    for(let i = 1; i < list.length; i++){
      if(list[i] < min){
        min = list[i];
      }
    }
    return min;
}

var max = function(list){
  let max = list[0];
    for(let i = 1; i < list.length; i++){
      if(list[i] > max){
        max = list[i];
      }
    }
    return max;   
   
}
```

#### Sum of two lowest positive integers
```javascript
function sumTwoSmallestNumbers(num) {
  return num.sort(function(a, b) {return a - b;})[0] + num.sort(function(a, b) {return a - b;})[1];
}
```

#### Remove the minimum
```javascript
function removeSmallest(numbers) {
  let arr = [];
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
     smallest = numbers[i];
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    if (j !== numbers.indexOf(smallest)) {
      arr.push(numbers[j]);
    } 
  }
  return arr;
}
```

#### Powers of 2
```javascript
function powersOfTwo(n){
let arr = [];
 for(let i = 0; i <= n; i++){
  arr.push(Math.pow(2, i));
 }
 return arr;
}
```

#### Training JS #4: Basic data types--Array
```javascript
function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length -1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  
  arr.push(el);
  return arr;
  
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}
```

#### No Loops 2 - You only need one
```javascript
function check(a,x){
  if(a.includes(x)) return true;
  else return false;
}
```

#### Be Concise IV - Index of an element in an array
```javascript
function find(a, e) {
let x=a.indexOf(e);
  return x===-1 ? "Not found" :x;
}
```

#### JavaScript Array Filter
```javascript
function getEvenNumbers(num){
  return num.filter(el => el % 2 === 0);
}
```

#### Find how many times did a team from a given country win the Champions League?
```javascript
function countWins(winnerList, country) {
  let c = 0;
  for (let i = 0; i < winnerList.length; i++) {
    if (winnerList[i].country === country) c++;
  }
  return c;
} 
```

#### Array.diff
```javascript
function array_diff(a, b) {
  return a.filter(x => !b.includes(x));
}  
```

#### Train to remove duplicates from an array with filter()
```javascript
function unique(arr) {
 return arr.filter (function (value, index, array) { 
    return array.indexOf (value) == index;
});

}
```

#### Two Oldest Ages
```javascript
function twoOldestAges(ages){
   const sorted =  ages.sort((a, b) => b - a);
   return Array.of(sorted[1], sorted[0]);
}
```

#### String Templates - Bug Fixing #5
```javascript
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
```

#### Printing Array elements with Comma delimiters
```javascript
function printArray(array){
 return array.join();
}
```

#### CSV representation of array
```javascript
function toCsvText(array) {
   return array.join("\n");
}
```

#### Enumerable Magic #1 - True for All?
```javascript
function all( arr, fun ){
 return arr.every(fun);
}
```

#### Grasshopper - Array Mean
```javascript
var findAverage = function (nums) {
 return  nums.reduce((accum, cur) => accum + cur) / nums.length;
}
```

#### Beginner - Reduce but Grow
```javascript
function grow(x){
 return x.reduce ((accum, cur) => accum * cur, 1)
}
```

#### SpeedCode #2 - Array Madness
```javascript
function arrayMadness(a, b) {
  return (a.reduce((acc, cur) => acc + cur ** 2, 1)) > (b.reduce((acc, cur) => acc + cur ** 3, 1)) ? true : false;
}
```

#### Remove First and Last Character Part Two
```javascript
function array(arr){
const arr1 = arr.replace(/\s/g,'').split(",").slice(1, -1);
return arr1.length === 0 ? null : arr1.join(" ");
}
```

#### Template Strings
```javascript
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`;
}
```

#### get character from ASCII Value
```javascript
function getChar(c){
  return String.fromCharCode(c);
}
```

#### Regex validate PIN code
```javascript
function validatePIN (pin) {
  if (!(pin.length === 4 || pin.length === 6)) return false;
  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  for (let i = 0; i < pin.length; i++) {
      if (!num.includes(pin[i])) return false;
  }
  return true;
}
```

#### Numbers to Letters
```javascript
function switcher(x){
let a = {
  '29': ' ',
  '28': '?',
  '27': '!',
  '26': 'a',
  '25': 'b',
  '24': 'c',
  '23': 'd',
  '22': 'e',
  '21': 'f',
  '20': 'g',
  '19': 'h',
  '18': 'i',
  '17': 'j',
  '16': 'k',
  '15': 'l',
  '14': 'm',
  '13': 'n',
  '12': 'o',
  '11': 'p',
  '10': 'q',
  '9': 'r',
  '8': 's',
  '7': 't',
  '6': 'u',
  '5': 'v',
  '4': 'w',
  '3': 'x',
  '2': 'y',
  '1': 'z'
}
  r = '';
  for(let i = 0; i < x.length; i++) {
    r = r + a[x[i]];
  }
  return r;
}
```

#### Unique In Order
```javascript
var uniqueInOrder=function(iterable){
  let res = [];
  let last = '';
  
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== last){
      last = iterable[i]
      res.push(last);
    }
  }
  return res;
}
```

#### Regex count lowercase letters
```javascript
function lowercaseCount(str){
let count = 0;
let alph = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i <= str.length; i++){
      if(alph.includes(str[i]) && str[i].toLowerCase() === str[i]){
        count ++;
      }
    }
    return count;
}
```

#### Spacify
```javascript
function spacify(str) {
let str1 = '';
  for(let i = 0; i < str.length; i++){
    str1 = str1 + str[i] + ' ';
  }
  return str1.slice(0, -1);
}
```

#### Thinking & Testing : Something capitalized

```javascript
function testit(s){
  if(s === "") return "";
    else return s.split(" ").map( el => el.slice(0, -1) + el[el.length - 1].toUpperCase()).join(" ");
}
```

#### Find the capitals
```javascript
var capitals = function (word) {
  const arr = [];
	for(let i = 0; i < word.length; i++){
    if(word[i].toUpperCase() === word[i]) arr.push(i);
  }
  return arr;
}
```

#### Don't give me five!
```javascript
function dontGiveMeFive(start, end){
  let count = 0;
  for(let i = start; i <= end; i++){
    if(!i.toString().includes("5")) count++;
  }
  return count;
}
```

#### Find the position!
```javascript
function position(letter){
 let alp = "abcdefghijklmnopqrstuvwxyz";
   return "Position of alphabet: " + (alp.indexOf(letter) + 1);
}
```

#### Tail Swap
```javascript
function tailSwap(arr) {
  return [arr[0].slice(0, arr[0].indexOf(":")) + arr[1].slice(arr[1].indexOf(":")), arr[1].slice(0, arr[1].indexOf(":")) + arr[0].slice(arr[0].indexOf(":"))];
}
```

#### Credit Card Mask
```javascript
function maskify(cc) {
  return cc.length < 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4);
}
```

#### Vowel remover
```javascript
function shortcut(string){
 //let newStr = '';
  //for(let i = 0; i < string.length; i++){
   return string.split('').map(x=>x.replace( /[aeiou]/g, '' )).join('');
  //}
}
```

#### Exclamation marks series #2: Remove all exclamation marks from the end of sentence
```javascript
function remove(s){
  return s.replace(/!+$/g, '');
}
```

#### Get number from string
```javascript
function getNumberFromString(s) {
  return +s.replace(/[^0-9.]/g, '');
}
```

#### FIXME: Replace all dots
```javascript
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}
```

#### Squash the bugs
```javascript
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
}
return longest;
}
```

#### Name Shuffler
```javascript
function nameShuffler(str){
  let arr =  str.split(' ');
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr[0] = last;
    arr[arr.length - 1] = first;
  return arr.join(' ');
}
```

#### Reversing Words in a String
```javascript
function reverse(str){
  if (str === '') return '';
  return str.split(' ').reverse().join(' ');
  }
```

#### Descending Order
```javascript
function descendingOrder(n){
console.log(n);
 return +n.toString().split('').sort((a, b) => (a < b)).join('');
}
```
