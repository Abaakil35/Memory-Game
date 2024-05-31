//  ##############   this is for the title  ##########################

let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "you give up !!!";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});

// ##############  this is for Close Button #########################

const closingthegame = document.getElementById('close-game-button')
closingthegame.onclick = function (){
    window.close()
} 


// ############### this is for Start Game Button & Message box ###########
const messageBox = document.getElementById("message-box");
const startGameButton = document.getElementById("start-game-button");

startGameButton.addEventListener("click", () => {
  messageBox.style.display = "none";
  messageBox.style.justifyContent = "center"

// display style of click start button when you click it
  container.style.display = 'flex'
});

// ############### this is for The Sound Of The game ###########
let sound_match = new Audio('sounds effect/match.mp3');
let sound_win = new Audio('sounds effect/winnig.mp3');
sound_win.volume=0.5;

// ############### this is for The Score Of The game ###########


var score =  document.getElementById('score')
var scorin = 0




const container = document.querySelector('.container')
const number = ["☢", "☢", "☠", "☠", "☃", "☃", "☣", "☣", "❄", "❄", "⚛︎", "⚛︎", "✹", "✹", "✪", "✪"];

var shuf_number = number.sort(() => (Math.random() - 0.5));

for (var i = 0; i < number.length; i++) {

    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_number[i];
    box.onclick = function() {
        this.classList.add('boxOpen');  
        setTimeout(function() {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML)
                 {
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    sound_match.play();
                    scorin +=2
                    score.innerHTML  = scorin
                    
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    
                };
                  
                
                if (document.querySelectorAll('.boxMatch').length == shuf_number.length) {
                    
                    sound_win.play()
                   setTimeout(function(){
                    alert('Congratulations!!!');
                   } , 700);
                    


                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    
                }; 
               
            }
        },750);
    };
    document.querySelector('.game').appendChild(box);
}   