let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayOddNumbers(){
 for(let i = 0; i < numbers.length; i++){
        
        if(numbers[i] % 2 !== 0){
            
            return numbers[i];
   };
 };
}
displayOddNumbers();
