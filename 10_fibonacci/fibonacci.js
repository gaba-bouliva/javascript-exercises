const fibonacci = function(fibNumber) {

    fibNumber = Number(fibNumber); 
    
    if(fibNumber > 0){
        
        let fibSequence = [];
        for (let i = 1; i <= fibNumber; i++) {
            if(fibSequence.length < 2) fibSequence.push(1);      
            else{
                nextFibNbr = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]; 
                fibSequence.push(nextFibNbr);
            }
        }

     
        return fibSequence[fibSequence.length -1 ];
    }else{
        
        return "OOPS";
    }
    
    
    
};
fibonacci(25)
// Do not edit below this line
module.exports = fibonacci;
