function printVowels(string) {
       (vowels = string.toLowerCase().replace(/[^aeiou]/ig, ", "));

       console.log("Vowels: " + vowels);
} 

printVowels("Umuzi");