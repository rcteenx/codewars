function solution(number) {
  // convert the number to a roman numeral
  let result = "";
  const strNum = number.toString();

  if (strNum.length > 3) {
    result += getThousands(strNum[strNum.length - 4]);
  }
  if (strNum.length > 2) {
    result += getHundreds(strNum[strNum.length - 3]);
  }
  if (strNum.length > 1) {
    result += getTens(strNum[strNum.length - 2]);
  }
  if (strNum.length > 0) {
    result += getOnes(strNum[strNum.length - 1]);
  }
  return result;
}

function getThousands(n) {
  switch (n) {
    case "1":
      return "M";
      break;
    case "2":
      return "MM";
      break;
    case "3":
      return "MMM";
      break;
    default:
      return "";
  }
}

function getHundreds(n) {
  switch (n) {
    case "1":
      return "C";
      break;
    case "2":
      return "CC";
      break;
    case "3":
      return "CCC";
      break;
    case "4":
      return "CD";
      break;
    case "5":
      return "D";
      break;
    case "6":
      return "DC";
      break;
    case "7":
      return "DCC";
      break;
    case "8":
      return "DCCC";
      break;
    case "9":
      return "CM";
      break;
    default:
      return "";
  }
}
function getHundreds(n) {
  switch (n) {
    case "1":
      return "C";
      break;
    case "2":
      return "CC";
      break;
    case "3":
      return "CCC";
      break;
    case "4":
      return "CD";
      break;
    case "5":
      return "D";
      break;
    case "6":
      return "DC";
      break;
    case "7":
      return "DCC";
      break;
    case "8":
      return "DCCC";
      break;
    case "9":
      return "CM";
      break;
    default:
      return "";
  }
}

function getTens(n) {
  switch (n) {
    case "1":
      return "X";
      break;
    case "2":
      return "XX";
      break;
    case "3":
      return "XXX";
      break;
    case "4":
      return "XL";
      break;
    case "5":
      return "L";
      break;
    case "6":
      return "LX";
      break;
    case "7":
      return "LXX";
      break;
    case "8":
      return "LXXX";
      break;
    case "9":
      return "XC";
      break;
    default:
      return "";
  }
}

function getOnes(n) {
  switch (n) {
    case "1":
      return "I";
      break;
    case "2":
      return "II";
      break;
    case "3":
      return "III";
      break;
    case "4":
      return "IV";
      break;
    case "5":
      return "V";
      break;
    case "6":
      return "VI";
      break;
    case "7":
      return "VII";
      break;
    case "8":
      return "VIII";
      break;
    case "9":
      return "IX";
      break;
    default:
      return "";
  }
}
