function zeros(n) {
  let trailingZeros = 0;
  let find5 = Math.floor(n / 5);
  while (find5 >= 5) {
    console.log(find5);
    trailingZeros += find5;
    find5 = Math.floor(find5 / 5);
  }
  trailingZeros += find5;
  return trailingZeros;
}

// 5 kyu
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// one of the best solutions
// function zeros(n) {
//   return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
// }

