function isPrime(){
    var num=67

    if(num>0){
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log("The entered number is a Prime Number")
        }else{
            console.log("Not a Prime Number")
        }
    }
    else{
        console.log("Enter a Positive number")
    }
}

isPrime()