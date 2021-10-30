var x =  parseInt(prompt("enter your number :"));
var z = 1;
for (let i = 1; i <= x; i++) {
    for (let k = 1; k <= z; k++) {
       document.write("*");
    }
    document.write("<br>");
    z += 1;
}

document.write("<hr>");

var z = 1;
for (let i = 1; i <= x; i++) {
    for (let j = x; j > z; j--) {
       document.write("&nbsp");
    }
    for (let k = 1; k <= z; k++) {
       document.write("*");
    }
    document.write("<br>");
    z += 1;
}