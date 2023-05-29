function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black"
        Breed: "Labrador",
        Age: 5,
        sound:"Bark!"
    };
    document.getElementById("Dictionary") .innerHTML = Animal.sound;
}