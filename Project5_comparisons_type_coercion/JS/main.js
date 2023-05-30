document.write(typeof "Word" + "  ");
//string number 
document.write(typeof 3 + "  ");

document.write("10" + 5 + "  ");
//infinity
document.write("  " + 2E310)
//-infinity
document.write("  " + -3E310)
//true
console.log(2 + 2);

console.log(10 < 7);

document.write("  " + 10 == 10);

document.write(10 === 20)

document.write(5 > 2 && 10 > 4 + "  ");

document.write("  " + 5 > 10 || 10 > 4);

document,write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not") .innerHTML = ! (5 > 10);
}