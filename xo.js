function XO(str) {
  // Check to see if a string has the same amount of 'x's and 'o's.
  // The method must return a boolean and be case insensitive.
  // The string can contain any char.
  let countX = 0;
  let countO = 0;
  for (let i in str) {
    if (str[i].toLowerCase() == "x") countX++;
    else if (str[i].toLowerCase() == "o") countO++;
  }

  return countX == countO;
}

console.log(XO("Xo"));
