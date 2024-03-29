// this is for the title 
let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Back Play!!!";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});
//  Voice animation
// Message.box


const number = ["☢", "☢", "☠", "☠", "☃", "☃", "☣", "☣", "❄", "❄", "⚛︎", "⚛︎", "✹", "✹", "✪", "✪"];
let math = Math;
let sound_match = new Audio('sounds effect/openMatch.wav');
// let sound_notmatch 
// let sound_win
var openedBoxes = [];

number.sort(() => (Math.random() > .5) ? 1 : -1);

number.forEach((number, index) => {
    
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = number;

    box.onclick = function() {
        this.classList.add('boxOpen');

        setTimeout(() => {
            if (openedBoxes.length < 2) {
                openedBoxes.push(this);

                if (openedBoxes.length === 2) {
                    if (openedBoxes[0].innerHTML === openedBoxes[1].innerHTML) {
                        openedBoxes[0].classList.add('boxMatch');
                        openedBoxes[1].classList.add('boxMatch');

                        openedBoxes[0].classList.remove('boxOpen');
                        openedBoxes[1].classList.remove('boxOpen');
                        sound_match.play();

                        if (document.querySelectorAll('.boxMatch').length === number.length) {
                            alert('you win !!!');
                        }

                        openedBoxes = [];
                    } else {
                        openedBoxes[0].classList.remove('boxOpen');
                        openedBoxes[1].classList.remove('boxOpen');
                    }

                    openedBoxes = [];
                }
            }
        }, 500);
    };

    document.body.appendChild(box);
});
  
