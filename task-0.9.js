function printVowels(string) {
       (vowels = string.toLowerCase().match(/[aeiou]/g));
       console.log(vowels);
} 

printVowels("Umuzi");