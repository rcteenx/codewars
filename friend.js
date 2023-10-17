function friend(friends) {
  // Make a program that filters a list of strings
  // and returns a list with only your friends name in it.
  const realFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) realFriends.push(friends[i]);
  }
  return realFriends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
