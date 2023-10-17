function validBraces(braces) {
  // Write a function that takes a string of braces, and determines
  // if the order of the braces is valid.
  // It should return true if the string is valid, and false if it's invalid.
  const openBra = [];
  for (let i in braces) {
    switch (braces[i]) {
      case "(":
      case "[":
      case "{":
        openBra.push(braces[i]);
        break;
      default:
        if (openBra.length == 0) return false;
        if (getOpenBraces(braces[i]) === openBra[openBra.length - 1]) {
          openBra.pop();
        } else return false;
    }
  }
  if (openBra.length == 0) return true;
  return false;
}

function getOpenBraces(bra) {
  if (bra === ")") return "(";
  else if (bra === "]") return "[";
  else if (bra === "}") return "{";
}

console.log(validBraces("()"));
