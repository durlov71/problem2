function primeNumber(num){
    let isPrime=true

    if(num <0 ){ //for checking positive number
        console.log("Enter a positive number")
    }else{                       //if entered number is positive then check the positive number.
        for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log("true")
    }else{
        console.log("false")
    }

    }

    
}
primeNumber(10)