function printVowels(string) {
       let vowelList = 'AEIOUaeiou'
       let vowels = '';
       
        for(var i = 0; i < string.length ; i++)
         {
           if (vowelList.indexOf(string[i]) !== -1)
           {
             vowels += string[i];
           }
           
         }
         return 'Vowels: ' + [...new Set(vowels.toLowerCase())];
       }
console.log(printVowels("Umuzi"));