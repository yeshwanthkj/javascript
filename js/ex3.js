
    function temp(t)
    {
        f=(9*t/5)+32;
        return f;
    }
    
document.getElementById("convert").onclick=function() 
{
 var c=document.getElementById('temp_celsius').value;
 document.getElementById('temp_fahr').innerHTML=temp(c);
};
document.getElementById('anos_copa').innerHTML= "";
for(var i=2022;i<=2050;i=i+4)
{
    document.getElementById('anos_copa').innerHTML+= "<li>"+i+"</li>";
}
var g1=parseInt(document.getElementById('grade1').value);
var g2=parseInt(document.getElementById('grade2').value);
var ab=document.getElementById('absences').value;
document.getElementById("calculate").onclick=function()
{
    var g1=parseInt(document.getElementById('grade1').value);
    var g2=parseInt(document.getElementById('grade2').value);
    var ab=document.getElementById('absences').value;
    if (ab>6)
 {
    document.getElementById('result').innerHTML='student is failed due to absence';
 }
   else if(((g1+g2)/2)<=6.5)
 {
    document.getElementById('result').innerHTML='student is failed due to grade';
 }
 else 
 {
    document.getElementById('result').innerHTML='student is passed';    
 }
  if ((ab>6) && ((g1+g2)/2<=6.5))
 {
    document.getElementById('result').innerHTML='student is failed due to both';   
 }
}
var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];
//document.getElementById('course_sales').innerHTML="";
function display(i)
{

    for(j in sales[i])
    {
         return '<td>'+(sales[i][j])+'</td>';   
        
    }

}
 for (i in sales)
 {
     console.log(i);
   console.log(display(i));
   console.log('<tr>'+display(i)+'</tr>')
    // document.getElementById('course_sales').innerHTML+="<tr>"+ display(i)+"</tr>"; 
 }