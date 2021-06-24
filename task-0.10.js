function commonLetters(string1, string2) {
    let common = [];
  
    for (let i = 0; i < string1.length; i++) {
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] == string2[j]) common.push(string1[i]);
      }
    }
    return common.join(",");
  }

    return "Common letters: " + commonLetters("house", "computers");