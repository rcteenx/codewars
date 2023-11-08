function dirReduc(arr) {
  let arr2 = dirReducL1(arr);
  let stopLength;

  do {
    stopLength = arr2.length;
    arr2 = dirReducL1(arr2);
  } while (stopLength !== arr2.length);
  return arr2;
}

function dirReducL1(arr) {
  // console.log(arr);
  const arrShort = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkNext(arr[i], arr[i + 1])) {
      i++;
    } else {
      arrShort.push(arr[i]);
    }
  }
  // console.log(arrShort);
  return arrShort;
}

function checkNext(s1, s2) {
  if (s2 === undefined) return false;
  if (s1 === "NORTH" && s2 == "SOUTH") return true;
  if (s1 === "SOUTH" && s2 == "NORTH") return true;
  if (s1 === "WEST" && s2 == "EAST") return true;
  if (s1 === "EAST" && s2 == "WEST") return true;
  return false;
}

// dirReduc(["NORTH", "WEST", "NORTH", "SOUTH", "EAST", "SOUTH"]);
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

/*
Task
Write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions 
removed (W<->E or S<->N side by side).
*/
