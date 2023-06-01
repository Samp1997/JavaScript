var X = 10;
function Add_numbers_1() {
    document.write(20 + X +"<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//unerversal Var
if (1 < 2 + " ") {
    document.write("  " +"The left number is smaller than the number on the right.")
}

function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!"; 
    }
    document.getElementById("") .innerHTML = Vote;
    console.log "How_old_are_you?"
}

//Time function, if, else if and else statments 
function Time_function(){
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}