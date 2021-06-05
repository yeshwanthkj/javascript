function sum_args(num1,num2)
{
    return(num1+num2);
}
sum_args(-27,55)

var order_date =new Date("03/26/2020");
var delivery_date=new Date("04/02/2020");
document.getElementById("delivery_time").innerHTML=((delivery_date.getTime()- order_date.getTime())/86400000)+"Days";
