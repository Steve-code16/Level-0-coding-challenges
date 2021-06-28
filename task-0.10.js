function commonLetters(string1, string2){
  let common = [];

  for(let i = 0; i < string2.length; i++){
     if(string1.includes(string2[i]))
       common.push(string2[i]);
  }
  return "Common letters: " + common;
}
console.log(commonLetters("houses", "computers"));