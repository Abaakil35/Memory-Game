console.log("Test Title");
let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Back Play!!!";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});

const number = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8"];
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

                    if (document.querySelectorAll('.boxMatch').length == shuf_number.length) {
                        alert('You Win!!!');
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}