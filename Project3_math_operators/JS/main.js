function subtractionFunction_() {
    var Subtraction = 5 - 2;
    document.getElementById("sub") .innerHTML ="5 - 2 = " + Subtraction;
}
//multiply
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("mult") .innerHTML = "6 x 8 = " + simple_Math;
}
//divide
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("div") .innerHTML = "48 / 6 = " + simple_Math;

}
//oder of opertaion
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document. getElementById("div2") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math
}

function modules_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mod") .innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("operator") .innerHTML = -x;
}

var x = 5;
x++;
document.write(x);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random)() * 10 ;
//Not displaying in chrome 