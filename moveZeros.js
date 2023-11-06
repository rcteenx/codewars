function moveZeros(arr) {
  const a1 = [];
  const a0 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      a0.push(arr[i]);
    } else {
      a1.push(arr[i]);
    }
  }
  return a1.concat(a0);
}

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

/*
Best practice
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/
