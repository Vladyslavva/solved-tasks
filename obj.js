function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

function IOL(arr, language){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].language === language) return i;
  }
  return -1;

}
var abc = ['a', 1, 'a', 2, '1'];
var unique = list1.filter( (v, i, a) => IOL(a, v.language) === i); // returns ['a', 1, 2, '1']
console.log(unique);