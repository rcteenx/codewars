// return masked string
function maskify(cc) {
  let lenCard = cc.length;
  if (lenCard < 4) return cc;

  let maskedCard = "";
  for (let i = 0; i < lenCard; i++) {
    if (i < lenCard - 4) maskedCard += "#";
    else maskedCard += cc[i];
  }

  return maskedCard;
}

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

console.log(maskify("11"));
console.log(maskify("4556364607935616"));
