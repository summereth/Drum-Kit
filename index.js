var buttonNum = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonNum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeydown);

function handleClick() {
    getSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
}

function handleKeydown(x) {
    getSound(x.key);
    buttonAnimation(x.key);
}

function getSound(key) {
    switch(key) {
        case "w":
            var wAudio = new Audio ("sounds/tom-1.mp3");
            wAudio.play();
            break;

        case "a":
            var aAudio = new Audio ("sounds/tom-2.mp3");
            aAudio.play();
            break;
        
        case "s":
            var sAudio = new Audio ("sounds/tom-3.mp3");
            sAudio.play();
            break;

        case "d":
            var dAudio = new Audio ("sounds/tom-4.mp3");
            dAudio.play();
            break;

        case "j":
            var jAudio = new Audio ("sounds/crash.mp3");
            jAudio.play();
            break;

        case "k":
            var kAudio = new Audio ("sounds/kick-bass.mp3");
            kAudio.play();
            break;

        case "l":
            var lAudio = new Audio ("sounds/snare.mp3");
            lAudio.play();
            break;
    }
}

function buttonAnimation(key) {
    var element = document.querySelector("." + key);
    element.classList.toggle("pressed");

    setTimeout(function() {
        element.classList.toggle("pressed");
    }, 300);
}