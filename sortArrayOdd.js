function sortArray(array) {
  const arrOdd = [];

  for (i = 0; i < array.length; ++i) {
    if (!isNaN(array[i]) && Math.abs(array[i]) % 2 == 1) {
      arrOdd.push(array[i]);
    }
  }
  arrOdd.sort(function (a, b) {
    return a - b;
  });

  let j = 0;
  for (i = 0; i < array.length; ++i) {
    if (!isNaN(array[i]) && array[i] % 2 == 1) {
      array[i] = arrOdd[j];
      j++;
    }
  }
  console.log(array);
  return array;
}

sortArray([1, 2, 3, 1]);

/*
Task:
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/
