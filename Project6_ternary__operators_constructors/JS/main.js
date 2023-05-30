function Ride_Function() {
    var age, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to vote.";
}

function count_Function() {
    document.getElementById("Counting") .innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function subtract_Function() {
    document.getElementById("Nested_Function") .innerHTML = Subtract();
    function Subtract() {
        var Start_point = 10;
        function Subtract_one() {Start_point -= 1;}
        Subtract_one();
        return Start_point;
    }
}