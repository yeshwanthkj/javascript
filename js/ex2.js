function temp(t)
{
    f=(9*t/5)+32;
    return f;
}
document.getElementById("fahr_1").innerHTML=temp(parseInt(document.getElementById("celsius_1").innerHTML));
document.getElementById("fahr_2").innerHTML=temp(parseInt(document.getElementById("celsius_2").innerHTML));
document.getElementById("fahr_3").innerHTML=temp(parseInt(document.getElementById("celsius_3").innerHTML));
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
document.getElementById("best_students").innerHTML= classification.slice(-3,);
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
document.getElementById("course_title").innerHTML=course["title"];
document.getElementById("main_category").innerHTML=course["categories"][0];
function stars()
{
   var a=course["5_stars_reviews"]/(course["1_stars_reviews"]+course["2_stars_reviews"]+course["3_stars_reviews"]+course["4_stars_reviews"]+course["5_stars_reviews"]);
   return a*100;
}
document.getElementById("reviews_5_stars").innerHTML=Math.round(stars());

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.unshift(shoppingList.pop());
shoppingList.push("cheese");
shoppingList.push("eggs");
console.log(shoppingList);





                