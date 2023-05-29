//Dictionary
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        sound:"Bark!",
    }; //what var is being dispalyed
    document.getElementById("Dictionary") .innerHTML = Animal.sound;
}
//Delete Statement
delete Animal.Breed