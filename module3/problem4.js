function calculate(){
    var sum= 0
    var num= [1,2,3,4,5,6]
    for(let x of num){
        square=x*x
        sum=sum+square
    }
    console.log(Math.sqrt(sum))
}

calculate()