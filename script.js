console.log("Test Title");
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


var shuf_number = number.sort(() => (Math.random() > .5) ? 2 : -1);
for (var i = 0; i < number.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_number[i];
    box.onclick = function() {
        this.classList.add('boxOpen');
        setTimeout(function() {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                   
                }
                  else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    
                }
                
            
                if (document.querySelectorAll('.boxMatch').length == shuf_number.length) {
                    alert('You Win!!!');
                }
            }
        },  500);
    };

    document.querySelector('.game').appendChild(box);
}