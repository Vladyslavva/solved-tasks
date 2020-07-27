const arr5 = [1, 1];
for(let i = 2; i < 10; i++){
  arr5.push(arr5[i-1] + arr5[i-2]);
}
console.log(arr5);
