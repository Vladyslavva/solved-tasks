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
