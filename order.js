function order(words) {
  let maxNum = 1;
  const ch1 = words.split(" ");
  console.log(ch1);

  ch1.sort(function (a, b) {
    if (getNumberInWord(a) < getNumberInWord(b)) {
      return -1;
    }
    return 1;
  });

  return ch1.join(" ");
}

function getNumberInWord(word) {
  const ch1 = word.split("");
  for (i = 0; i < ch1.length; ++i) {
    if (!isNaN(ch1[i])) {
      return ch1[i];
    }
  }
}

// console.log(order("al1 v3li del2"));

/* 
Best practice
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  
*/
