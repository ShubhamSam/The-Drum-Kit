var num = document.querySelectorAll('.drum').length;
// alert(num);
for (i = 0; i < num; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        console.log(this.innerHTML);
        var letter = this.innerHTML;
        // alert(letter);
        makeSound(letter);
        buttonAnimation(letter);

    });
}

document.addEventListener('keypress', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(sound) {
    switch (sound) {
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;

        default:
            console.log('Wrong');

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}

