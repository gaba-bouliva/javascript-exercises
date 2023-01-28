const palindromes = function (randomString) {
/**
 * input: string
 * output: true or false
 * 
 * remove punctuations
 * remove word breaks (join all the word into a single word)
 * reverse the string
 * compare if the original string equals the reversed string without puntuations and word breaks
 *  
 */

stringWithOutPunctuations = ''; 
reversedString = '';
let punctuations = {'dot': '.', 'comma': ',', 'exlamation': '!', 'questionMark': '?'}

// removes all punctuations and and broken words
for (let i = 0; i < randomString.length; i++) {
    if(randomString[i] && randomString[i] !== ' '){
        if(randomString[i] !== punctuations.dot && randomString[i] !== punctuations.comma && 
            randomString[i] !== punctuations.exlamation && randomString[i] !== punctuations.questionMark){
                stringWithOutPunctuations += randomString[i].toLowerCase();
        }
    }
    
}

// reverse the string without punctuations
for (let i = stringWithOutPunctuations.length - 1 ; i >= 0; i--) {
    reversedString += stringWithOutPunctuations[i];
}

 
if( stringWithOutPunctuations === reversedString) return true;
else return false;

};

// Do not edit below this line
module.exports = palindromes;
