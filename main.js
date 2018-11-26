function calculator(word,number1,number2){
    if (word == "add"){
        return number1 + number2;
    }else if(word == "subtract"){
        return number1 - number2 ;
    }else if(word == "multiply"){
        return number1 * number2;
    }else if(word == "divide"){
        return number1 / number2;
    }
}
console.log(calculator("subtract",4,5));