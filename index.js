var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var x = 0; x < numberOfDrumButtons; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click", function () {
        var holdInnerHtml = this.innerHTML;
        makeSound(holdInnerHtml);
        animation(holdInnerHtml);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    animation(event.key);
});

function makeSound(inputKeys) {
    switch (inputKeys) {
        case "w":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            var sounds = new Audio("./sounds/tom-4.mp3");
            sounds.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick_bass = new Audio("./sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(inputKeys);
            break;
    }
}

function animation(letters) {
    var findClass = document.querySelector("." + letters);
    findClass.classList.add("pressed");
    
    setTimeout(function() {
        findClass.classList.remove("pressed");
    }, 100);
}
