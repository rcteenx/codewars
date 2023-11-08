function race(v1, v2, g) {
  const arr = [];
  let hour, minute, second;
  // your code
  const speedDiffHour = v2 - v1;
  if (speedDiffHour < 0) {
    return null;
  }
  if (g > speedDiffHour) {
    arr.push(Math.floor(g / speedDiffHour));
  } else {
    arr.push(0);
  }
  let remainderMinute = g % speedDiffHour;
  let speedDiffMinute = speedDiffHour / 60;
  arr.push(Math.floor(remainderMinute / speedDiffMinute));

  let remainderSecond = remainderMinute % speedDiffMinute;
  let speedDiffSecond = speedDiffMinute / 60;
  arr.push(Math.floor(remainderSecond / speedDiffSecond));

  return arr;
}

race(720, 850, 70);

/* 
More generally: given two speeds v1 
(A's speed, integer > 0) and v2 (B's speed, integer > 0) 
and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] 
which is the time needed in hours, minutes 
and seconds (round down to the nearest second) 
or a string in some languages.
*/
