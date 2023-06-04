//While Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//For Loop
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

var family = ["Mom", "Dad", "Brother", "Sister"]
 //Array   
function array_Function() {
    document.getElementById("Array").innerHTML + document.write(family)
    
}

function constant_function() {
    const Musical_Instuments = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instuments.color = "blue";
    Musical_Instuments.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instuments.type + " was " + Musical_Instuments.price;
}
// let Keyword
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The Car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_object") .innerHTML = car.description();