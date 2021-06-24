function commonLetters(string1, string2) {
    common = "";
    let letters = string1.length >= string2.length ? string1.length:string2.length;  
         for (i = 0; i < letters; i++) {
            for (j = 0; j < letters; j++) {
                if (string1.charAt(i) === string2.charAt(j)) {
                    common = common + string1.charAt(i);
                }
            }
         }  return common;
    };

console.log("Common letters: " + commonLetters("house", "computers"));