function commonLetters(string1, string2) {
  let sameLetters = '';  
  let comString1 = ' ';
  let comString2 = ' ';

  if (string1.length > string2.length) {
    comString1 = string1;
    comString2 = string2;
  } else {
    comString1 = string2;
    comString2 = string1;
  }

  for(let i = 0; i < string1.length ; i++) {
    if (comString1.indexOf(comString2[i]) !== -1) {
      sameLetters += comString2[i];
    }
  }
  return "Common letters:" + [...new Set(sameLetters)];
};

console.log(commonLetters("houses", "computers"));