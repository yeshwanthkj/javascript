console.log("This is ex1.js");
var myname="yeshwanth";
var age=20;
document.getElementById("student_message").innerHTML = "Hi, my name is "+ myname+", I'm "+age+" years old and I'm learning Javascript";
var a=parseInt(document.getElementById("num_1").innerHTML);
var b=parseInt(document.getElementById("num_2").innerHTML);
var r =(a+b)/2;
document.getElementById("result").innerHTML = r.toFixed(2);
var x = document.getElementsByClassName("hljs-string").textContent;
console.log(Math.pow(32,6));
var x=document.getElementById("url_1").textContent;
document.getElementById("url_2").innerHTML = "https://"+x;
var y=(document.getElementById("url_3").textContent).replace("https://","");
document.getElementById("url_4").innerHTML =y; 


var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3=phone3.toString();
console.log(phone1.length==9);
console.log(phone2.length==9);
console.log(phone3.length==9);


