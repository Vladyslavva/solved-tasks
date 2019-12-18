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
