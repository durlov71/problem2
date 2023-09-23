
var obj = new Date()

var year=obj.getFullYear()
var month=obj.getMonth()+1
var date=obj.getDate()
var format4 = year + "-" + month +"-" + date;

function takeDate(format4){
 var day=obj.getDay()
 console.log(day)
} 

takeDate(format4)

