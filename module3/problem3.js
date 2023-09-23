
let num=[1,2,3,4,5]

function calculate(num){
let sum=0
for (let x of num){
    let square = x*x
    sum=sum + square;
    
}
console.log(Math.sqrt(sum))
}

calculate(num);