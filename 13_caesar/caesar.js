const caesar = function(plainText, key) {
/**
 * Input: string and number(key)
 * Output: encoded string
 * 
 */

let alphabetPositions ={'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 
                'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
                't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26};

let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
                    'w','x','y','z']
                    
let encodedText = '';
for (let i = 0; i < plainText.length; i++) {
    if(plainText[i] === ' ' || plainText[i] === '!' || plainText[i] === ',' || plainText[i] === '?' || plainText[i] === '.'){
        encodedText += plainText[i];
        continue;
    }
    let PosNbr = alphabetPositions[plainText[i].toLowerCase()];
    let newPosNbr = PosNbr + key;
  
    if(newPosNbr > 26) newPosNbr = newPosNbr % 26;
    if(newPosNbr < 1) newPosNbr = 26 - (-(newPosNbr))
    
    let encodedChar = alphabets[newPosNbr - 1]

    if(plainText[i] === plainText[i].toLowerCase()){
            encodedText += encodedChar.toLowerCase();
            continue
    }
    if(plainText[i] === plainText[i].toUpperCase()) encodedText += encodedChar.toUpperCase();
   
    
}
return encodedText;
};
console.log(caesar('Hello, World!', 5) )
// Do not edit below this line
module.exports = caesar;
