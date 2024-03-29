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

#### Can Santa save Christmas?
```javascript
function determineTime(dur){
let sum = 0;
  for(let i = 0; i < dur.length; i++){
    let arr = dur[i].split(":");
    let h = +arr[0];
    let min = arr[1]/60;
    let sec = arr[2]/3600;
    sum = sum + h + min + sec;
  }
  return sum <= 24;
}
```

#### Every possible sum of two digits
```javascript
function digits(num){
  let arr = num.toString().split('');
  //console.log(arr);
  let rez = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      rez.push(+arr[i] + +arr[j]);
    }
  }
  return rez;
}
```

#### Make a function that does arithmetic!
```javascript
function arithmetic(a, b, operator){
  switch(operator){
   case "add": return a+b;
   case "subtract": return a-b;
   case "divide": return a/b;
   case "multiply": return a*b;
   }
   
}
```

#### makeBackronym
```javascript
//preload variable: dict

var makeBackronym = function(string){
  return string.split('').map(e => dict[e.toUpperCase()]).join(' ');
}
```

#### Job Matching #1
```javascript
function match(candidate, job) {
console.log(candidate.minSalary);
if (candidate.minSalary === undefined || job.maxSalary === undefined)  throw "Error";
  return candidate.minSalary - 0.1 * candidate.minSalary <= job.maxSalary;
}
```

#### Add property to every object in array
```javascript
 for(let i = 0; i < questions.length; i++){
   questions[i].usersAnswer = null;
 }
```

#### Numbers to Objects
```javascript
function numObj(s){
  return s.map(function(e) {let o = {}; o[e] = String.fromCharCode(e); return o;});
  
}
```

#### Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
```javascript
function countLanguages(list) {
    return list.reduce(function(res, el) {
        if(isNaN(res[el.language]) || res[el.language] === undefined) res[el.language] = 1;
        else res[el.language] += 1;
        return res;
    }, {})
}
```

#### What is my name score? #1
```javascript
function nameScore(name){
  let sum = 0;
  let obj = {};
  for(let i = 0; i < name.length; i++){
    for(let key in alpha){
    //console.log(alpha[key]);
      if(key.includes(name[i].toUpperCase())) sum = sum + alpha[key];
    }
  }
  obj[name] = sum;
  return obj;
}
```

#### The Office I - Outed
```javascript
function outed(meet, boss){
    let sum = 0;
    for(let key in meet){
        if(key === boss) sum = sum + meet[key] * 2;
        else sum = sum + meet[key];
    }
    return sum / Object.keys(meet).length <= 5 ?  'Get Out Now!' : 'Nice Work Champ!'
}
```

#### Most valuable character
```javascript
function solve(st) {
    const obj = {};
    for(let i = 0; i < st.length; i++){
        obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
    }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : obj[a] != obj[b] ? b : a > b ? b : a);
}
```

#### Permute a Palindrome
```javascript
function permuteAPalindrome (input) {
    let resCount = count(input);
    cnt = 0;
    for(let key in resCount){
        if(resCount[key] % 2 !== 0) {
            cnt++;
            if (cnt > 1) return false;
        }
    }
    return true;
}

function count(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(str[i] in obj){
            obj[str[i]] += 1;
        } else obj[str[i]] = 1;
    }
    return obj;
}
```

#### How many days are we represented in a foreign country?
```javascript
function daysRepresented(trips){
let cnt = 0;
  trips.sort((a, b) => (a[0] - b[0]));
  checkDates(trips);
  for(let i = 0; i < trips.length; i++){
    let days = trips[i][1] - trips[i][0] + 1;
    cnt += days;
  }
   return cnt;
}

function checkDates(dates) {
  let res = [];
  for(let i = 0; i < dates.length - 1; i++) {
    if (dates[i][1] >= dates[i + 1][0]) {
      dates[i][1] = dates[i + 1][1];
      dates.splice(i + 1, 1);
      i--;
    }
  }
}
```

#### The Office II - Boredom Score
```javascript
function boredom(staff){
let scores = {'accounts': 1,
'finance': 2,
'canteen': 10,
'regulation': 3,
'trading': 6,
'change': 6,
'IS': 8,
'retail': 5,
'cleaning': 4,
'pissing about': 25
}
 let arr = Object.entries(staff);
 let cnt = arr.reduce((a, b) => (a + scores[b[1]]), 0);
 console.log(arr);
 return cnt <= 80 ? 'kill me now' : cnt < 100 && cnt > 80 ? 'i can handle this' : 'party time!!';
}
```

#### Grasshopper - Basic Function Fixer
```javascript
function addFive(num) {
  var total = num + 5
  return total;
}
```

#### Training JS #2: Basic data types--Number
```javascript
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v4 //set number value to a
  var b=v2  //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5  //set number value to b
  return a*b;
}
function equal4(){
  var a=v4  //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3  //set number value to b
  return a%b;
}
```

#### Miles per gallon to kilometers per liter
```javascript
function converter (mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
   mpg = mpg / 2.82481053;
  return +mpg.toFixed(2);
}
```

#### Fix the Bugs (Syntax) - My First Kata
```javascript
function  myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
   return false;
  } else {
   return a % b + b % a;
  }
}
```

#### Is this a triangle?
```javascript
function isTriangle(a,b,c){
return (a < b + c && b < a + c && c < a + b);
}
```

#### Training JS #6: Basic data types--Boolean and conditional statements if..else
```javascript
function trueOrFalse(val){
  return typeof val === "boolean" ? val + "" : !!val + "";
}
```
#### Get Planet Name By ID
```javascript
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
    
  }
  
  return name;
}
```

#### simple calculator
```javascript
function calculator(a,b,sign){
  if(typeof a !== 'number' || typeof b !== 'number') return "unknown value";
  switch(sign) {
  case "+": return a + b;
  case "-": return a - b;
  case "*": return a * b;
  case "/": return a / b;
  default: return "unknown value";
  }
}
```

#### No zeros for heros
```javascript
function noBoringZeros(n) {
if (n === 0) return 0;
  while (n % 10 === 0){
    if(n % 10 === 0) n = n/10;
  }
    return n;
}
```

#### Find the Slope
```javascript
function slope(p){
if (p[2] - p[0]=== 0) return "undefined";
 // (d-b)/(c-a)
  let res = (p[3] - p[1])/ (p[2] - p[0]);
  return res.toString();
}
```

#### Simple Fun #87: Shuffled Array
```javascript
function shuffledArray(shuf) {
 let sum = 0;
 output = [];
 sum = shuf.reduce((a,b) => a+b);
 output = shuf.sort((a,b) => a-b);
 let el = sum/2;
 let temp = output.splice(output.indexOf(el), 1);
 return output;
}
```

#### Power
```javascript
function numberToPower(n, pow){
 let p = 1;
  for(let i = 1; i <= pow; i++){
    p = p * n;
  }
  return p;
}
```

#### Beginner Series #3 Sum of Numbers
```javascript
function getSum( a,b ){
   if (a === b) return a;
   let sum = 0;
   if(a < b) {
     for (let i = a; i <= b; i++){
       sum = sum + i;
     }
   } else {
     for(let i = b; i <= a; i++){
     sum = sum + i;
     }
   }
   return sum;
}
```

#### Smallest Difference
```javascript
function smallestDiff(arr1, arr2) {
    if(arr1.length === 0 && arr2.length === 0) return -1;
    if(arr1.length === 0) return Math.min(...arr2);
    if(arr2.length === 0) return Math.min(...arr1);
    let min = Math.abs(arr2[0] - arr1[0]);
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            let diff = Math.abs(arr2[i] - arr1[j]);
            if (diff < min) min = diff;
        }
    }
    return min;
}
```
#### Javascript Mathematician
```javascript
function calculate() {
let s = 0;
    for (let i = 0; i < arguments.length; i++) s = s + arguments[i];
    return function(){
    let s2 = 0;
    for (let j = 0; j < arguments.length; j++) s2 = s2 + arguments[j];
    return s + s2;
  };
}
```

#### Sum Strings as Numbers
```javascript
function sumStrings(a,b) { 
let zeros = Math.abs(b.length - a.length);
if(a.length < b.length){
  a = '0'.repeat(zeros) + a;
} else b = '0'.repeat(zeros) + b;
 let result = '';
 let p = 0;
 for(let i = a.length - 1; i >= 0; i--){
   let sum = +a[i] + +b[i] + p;
   if(sum >= 10){
     result = sum % 10 + result;
     p = 1;
   } else {result = sum % 10 + result; p = 0;}
  }
  if(p === 1) result = p + result;
  return result.replace(/^0+/, '');
 
}
```

#### The wheat/rice and chessboard problem
```javascript
function squaresNeeded(grains){
 let count = 0;
 let sum = 0;
 let x = 1;
 while(sum <grains){
  sum += x;
  count++;
  x *= 2;
 }
 return count;
}
```

#### What will be the odd one out?
```javascript
function oddOneOut(str) {
   let obj = {};
   let out= [];
   for(let i = 0; i < str.length; i++){
     if(!obj[str[i]]) obj[str[i]] = 1;
     else delete obj[str[i]];
     }
   for(let i = 0; i < str.length; i++){
     if(obj[str[i]] && str.lastIndexOf(str[i]) === i)
     out.push(str[i]);
   }  
   return out;
}
```

#### Bingo Card
```javascript
function getRandom(min, max) {
 return Math.floor(Math.random() * (max - min + 1) + min); 
}

function fillArr(min, max, n){
  let arr = [];
  for(let i = 0; arr.length < n; i++){
    let r = getRandom(min, max);
    if(!arr.includes(r)) arr.push(r);
  }
  return arr;
}
function getCard(){
  let obj = {
  'B': fillArr(1, 15, 5),
  'I': fillArr(16, 30, 5),
  'N': fillArr(31, 45, 4),
  'G': fillArr(46, 60, 5),
  'O': fillArr(61, 75, 5),
  };
  let final = [];
  for(let i in obj) {
    for(let j = 0; j < obj[i].length; j++){
      final.push(i + obj[i][j]);
    }
  }
  return final;
}
```
#### Regexp Basics - is it a digit?
```javascript
String.prototype.digit = function() {
  let arr = this.match(/[0-9]/g);
  if(!arr) return false;
  else if(this.length === arr.length && arr.length === 1) return true;
  else return false;
};
```

#### Remove the minimum
```javascript
function removeSmallest(numbers) {
 if(numbers.length === 0) return [];
 let min = Math.min(...numbers);
 let index = numbers.indexOf(min);
 let arr = numbers.filter((el, i) => i != index);
 return arr;
}
```

#### Find the Difference in Age between Oldest and Youngest Family Members
```javascript
function differenceInAges(ages){
  let max = Math.max(...ages);
  let min = Math.min(...ages);
  let dif = max - min;
  let res = [];
  res.push(min, max, dif);
  return res;
}
```

#### Find the Difference in Age between Oldest and Youngest Family Members
```javascript
function differenceInAges(ages){
  let resArr = [];
  let minAge = ages[0];
  let maxAge = ages[0];
  for (let i = 0; i < ages.length; i++){
    if(ages[i] < minAge) minAge = ages[i];
    if(ages[i] > maxAge) maxAge = ages[i];
  }
  let dif = maxAge - minAge;
  resArr.push(minAge, maxAge, dif);
  return resArr;
}
```

#### Watermelon
```javascript
function divide(weight){
  if (weight > 2 && weight % 2 === 0) return true;
    else return false;
}
```

#### Beginner Series #1 School Paperwork
```javascript
function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  else return n * m;
}
```

#### Area or Perimeter
```javascript
const areaOrPerimeter = function(l , w) {
  if (l === w) return l * w;
    else return (l + w) * 2;
}
```

#### noobCode 01: SUPERSIZE ME.... or rather, this integer!
```javascript
function superSize(num){
if(num >= 0 && num < 10) return num;
  return +num.toString().split('').sort((a, b) => (b - a)).join('');
}
```

#### N-th Power
```javascript
function index(array, n){
 if(array.length < n + 1) return -1;
 return Math.pow(array[n], n);
}
```
#### What is between?
```javascript
function between(a, b) {
const arr = [];
for(let i = a; i <= b; i++){
  arr.push(i);
}
return arr;
}
```

#### Simple validation of a username with regex
```javascript
function validateUsr(username) {
 let res =  /^[a-z0-9\_]{4,16}$/.test(username) ;
  return res;
}
```

#### Remove exclamation marks
```javascript
function removeExclamationMarks(s) {
  return s = s.replace (/!/g, "");
}
```

#### Testing Palindromes
```javascript
palindrome = function(str) {
  if(str.split('').reverse( ).join('').toLowerCase() === str.toLowerCase()) return true;
    return false;
}
```

#### Take the Derivative
```javascript
function derive(coef,exp) {
 return `${coef * exp}x^${exp - 1}`;
  }
```

#### Exclusive "or" (xor) Logical Operator
```javascript
function xor(a, b) {
  if (a === b) return false;
  else return true;
}
```

#### Grasshopper - Messi Goals
```javascript
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
```

#### Is n divisible by x and y?
```python
def is_divisible(n,x,y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False
```

#### Grasshopper - Debug
```python
def weather_info (temp):
    c = convert(temp)
    if (c < 0):
        return (str(c) + " is freezing temperature")
    else:
        return (str(c) + " is above freezing temperature")
    
def convert(temperature):
    celsius = (temperature - 32) * (5/9)
    return celsius
```

#### Short Long Short
```python
def solution(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
```

#### Grasshopper - Debug sayHello
```python
def say_hello(name):
    return("Hello, " + name)  
```

#### The falling speed of petals
```python
def sakura_fall(v):
    if v <= 0:
        return 0
    else:
        return 400/v
```

#### Find Multiples of a Number
```python
#     return list(range(int, limit + 1, int))

    nums = []
    i = int
    while i <= limit:
        nums.append(i)
        i = i + int
    return nums
```

#### Smallest unused ID
```python
def next_id(arr):
    if len(arr) == 0:
        return 0
    return min(set(list(range(max(arr) + 2))) - set(arr))
```

#### Adding Big Numbers
```python
function add (a, b) {
  let res = '' 
  let  c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
```

#### Grasshopper - Function syntax debugging
```python
def main (verb, noun):
    return verb + noun
```

#### Quarter of the year
```python
def quarter_of(month):
    if month <= 3:
        return 1
    elif month >= 4 and month <= 6:
        return 2
    elif month >= 7 and month <= 9:
        return 3
    else:
        return 4

```

#### Reversed sequence
```python
def reverse_seq(n):
    return list(range(1, n+1))[::-1]
```

#### Grasshopper - If/else syntax debug
```python
def check_alive(health):
    if health <= 0:
        return False
    else:
        return True
```

#### Grasshopper - Variable Assignment Debug
```python
a = "dev"
b = "Lab"
name = a + b
```

#### Grasshopper - Object syntax debug
```javascript
var rooms = {
  first: {
    description: 'This is the first room',
    items : {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
  },
},
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    },
  },
}
```

#### Debug the functions EASY
```javascript
function multi(arr) {
//   let x = 1;
//   for(let i = 0; i < arr.length; i++){
//     x = x * arr[i]
//   }
//   return x;
  return arr.reduce((accum, cur) => accum * cur, 1);
}

function add(arr) {
  return arr.reduce((accum, cur) => accum + cur);
}

function reverse(str) {
  console.log(str)
  return str.split("").reverse().join("");
}
```

#### Debug Basic Calculator
```javascript
var calculate = function calculate(a, o, b) {
 if(o === "+")  return a + b
   else if (o === "-") return a - b;
   else if (o === "*") return a * b;
   else if(o === "/" && b !== 0) return a / b;
   else return null;
  }
```

#### Sort Numbers
```javascript
function solution(nums){
if(nums === null || nums.length === 0) return [];
  return nums.sort((a, b) => a - b);
}
```

#### Sort Numbers
```python
def solution(nums):
    if nums is None or len(nums) == 0:
        return []
    return sorted(nums)
```

#### Debug Basic Calculator
```python
def calculate(a, o, b):
     
    if(o == "+"):
        return a + b
    elif(o == "-"):
        return a - b
    elif (o == "/" and b != 0):
        return a / b
    elif(o == "*"):
        return a * b
    else:
        return None
```

#### Return a string's even characters
```python
def even_chars(st): 
    list = []
    if len(st) < 2 or len(st) > 100:
        return "invalid string"
    i = 1
    for l in st:
        if i % 2 == 0:
            list.append(l)
        i = i + 1    
    return list
```

#### Return a string's even characters
```javascript
function evenChars(str) {
if(str.length < 2 || str.length > 100) return "invalid string"
  let arr = [];
  for(let i = 0; i < str.length; i++){
    if(i % 2 !== 0)
      arr.push(str[i]);
  }
  return arr;
}
```

#### Valid Braces
```javascript
function validBraces(str){
  while (str.includes('()') || str.includes('[]') || str.includes('{}')) {
    str = str.replace('()', '');
    str = str.replace('[]', '');
    str = str.replace('{}', '');
  }
  return str === "";
}
```

#### Valid Braces
```python
def validBraces(str):
    dic = {"(": ")",
           "[": "]",
           "{": "}"}
    i = 0
    for char in str:
        if char in dic.keys():
            if not (dic[char] == str[i+1] or (dic[char] == str[len(str)-1-i]) and i < len(str)/2):
                return False
        i = i+ 1
    return True
```

#### Parse float
```python
def parse_float(str):
    try:
        return float(str)
    except:
        return None
```

#### Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
```javascript
function getFirstPython(list) {
  for(let i = 0; i < list.length; i++){
    if(list[i].language === 'Python') return list[i].firstName + ', ' + list[i].country;
  }
  return 'There will be no Python developers';
}
```

#### Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
```javascript
function countDevelopers(list) {
  let count = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i].continent === 'Europe' && list[i].language === 'JavaScript')
      count++
  }
  return count;
}
```

#### Coding Meetup #2 - Higher-Order Functions Series - Greet developers
```javascript
function greetDevelopers(list) {
  for(let i = 0; i < list.length; i++){
    list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
  }
  return list;
}
```

#### Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
```javascript
function isRubyComing(list) {
 return Boolean(list.find(el => el.language === 'Ruby'));
}
```

#### Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
```javascript
function isSameLanguage(list) {
  return list.filter( (v, i, a) => IOL(a, v.language) === i).length === 1;
}

function IOL(arr, language){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].language === language) return i;
  }
  return -1;
}
```

#### Who ate the cookie?
```python
def cookie(x):
    print(type(x))
    if type(x) is str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x) is float or type(x) is int:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"
```

#### Is Undefined?
```javascript
function isUndefined(v) {
  console.log(typeof v);
    if(typeof v === "undefined") return true;
     return false;
}
```

#### Series of integers from m to n
```python
def generate_integers(m, n): 
    return list(range(m, n+1))
```

#### Simple Fun #152: Invite More Women?
```python
def invite_more_women(arr):
    return sum(arr) > 0
```

#### Simple Fun #152: Invite More Women?
```javascript
function inviteMoreWomen(L) {
  let cnt1 = 0;
  let cnt2 = 0;
  for(let i = 0; i < L.length; i++){
    if(L[i] === -1) cnt1++;
    else cnt2++;
  }
  if(cnt1 > cnt2 || cnt1 === cnt2) return false;
    return true;
}
```

#### Find the middle element
```javascript
var gimme = function (arr) {
  return [...arr].indexOf(arr.sort((a,b)=>a-b)[1])
}
```

#### Find the middle element
```python
def gimme(input_array):
    minEl = min(input_array)
    maxEl = max(input_array)
    i = 0
    for el in input_array:
        if el < maxEl and el > minEl: return i
        i = i + 1
```

#### Training JS #10: loop statement --for
```javascript
function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) even.push(arr[i]);
     else odd.push(arr[i]);
  }
  return [odd,even];
}
```

#### List Filtering
```javascript
function filter_list(l) {
  const a = l.filter(el => typeof(el) === 'number');
  return a;
}
```

#### List Filtering
```python
def filter_list(l):
    newList = []
    for num in l:
        if type(num) == int:
            newList.append(num)
    return newList
```

#### Filter out the vowels
```javascript
function vowelFilter (letters) {
  var vowels = ["a", "e", "i", "o", "u"];
  
  for(let i = 0; i < letters.length; i++){
    if(vowels.includes(letters[i])){
      letters.splice(i--, 1);
    }
  }
  return letters;
};
```

#### sreveR (with push)
```javascript
reverse = function(array) {
  let arr = [];
  for(let i = (array.length - 1); i >=0; i--){
    arr.push(array[i]);
  }
  return arr;
}
```

#### sreveR
```python
def reverse(lst):
    empty_list = list() 
    for i in lst:
        empty_list.insert(0, i)
    return empty_list
```

#### sreveR (with unshift)
```javascript
reverse = function(array) {
  let arr = [];
  for(let i = 0; i < array.length; i++){
    arr.unshift(array[i]);
  }
  return arr;
}
```

#### Sort array by string length
```javascript
const sortByLength = array => [...array].sort((a, b) => a.length - b.length)
```

#### Ones and Zeros
```javascript
const binaryArrayToNumber = arr => {
 return parseInt(arr.join(""), 2);
  }
```

#### Ones and Zeros
```python
def binary_array_to_number(arr):
    return int("".join([str(int) for int in arr]), 2)
```

#### Array element parity
```javascript
function solve(arr){
   return arr.find(el =>!arr.includes (-el));
};
```

#### BASIC: Making Six Toast
```python
def six_toast(num):
    return abs(num - 6)
```

#### How many times should I go?
```python
import math
def how_many_times(annual_price, individual_price):
    return math.ceil(annual_price/individual_price)
```

#### Improving Math.round(x)
```javascript
Math.roundTo = function (number, precision) {
 return Math.round(number * Math.pow(10,precision))/Math.pow(10,precision);
}
```

#### Sum of Minimums!
```javascript
function sumOfMinimums(arr) {
  return arr.reduce((acc, cur) => (acc + Math.min(...cur)), 0);
}
```

#### Show multiples of 2 numbers within a range
```python
def multiples(s1,s2,s3):
     return [i for i in range(s1, s3) if i % s1 == 0 and i % s2 == 0]
```

#### Start with a Vowel
```python
import re
def vowel_start(st):
    print(st)
    s = ''
    st = st.replace(" ", "")
    vowels = ['a', 'u', 'o', 'i', 'e']
    regex = re.compile('[^a-zA-Z0-9]')
    st = regex.sub('', st)
    for l in st:
        if l.lower() in vowels:
            s = s + ' ' + l.lower()
        else:
            s = s + l.lower()
    return s.strip()
```

#### Contamination #1 -String-
```python
def contamination(text, char):
    return char * len(text)
```

#### All Star Code Challenge #3
```python
def remove_vowels(strng):
    str = list(strng)
    i = 0
    while i < len(str):
        if str[i] == "a" or str[i] == "e" or str[i] == "i" or str[i] == "o" or str[i] == "u":
            str.remove(str[i])
            i = i - 1
        i = i + 1
    return "".join(str)
```

#### Filling an array (part 1)
```python
def arr(n=0): 
    return list(range(n))
```

#### Duplicate sandwich
```python
def duplicate_sandwich(arr):
    i = 0
    while len(arr):
        temp = arr[i]
        arr.remove(temp)
        if temp in arr:
            return arr[:arr.index(temp)]
```

#### Grasshopper - Summation
```python
def summation(num):
#     return sum([i for i in range(num + 1)])
    return sum(range(num+1))
```

#### Sentence to words
```javascript
function splitSentence(s) {
  let x = s.replace(/[^A-Za-z0-9]+/g, " ");
    const arr = x.trim().split(" ");
    return arr;
}
```

#### V A P O R C O D E
```javascript
function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}
```

#### No Loops 1 - Small enough?
```javascript
function smallEnough(a, l){
  return a.every(el => el <= l)
}
```


