var x = parseInt(prompt("Enter the starting number: "));
var y = parseInt(prompt("Enter the ending number: "));

// var s = 0;

// for(var i=x; i<=y; i=i+1)
// {
//     s = s + i;
// }




// document.write("Result :" + s);

var i = x;
var s = 0;

while(i <= y){
    s = s + i
    i++;
}
document.write("Result :" + s);
