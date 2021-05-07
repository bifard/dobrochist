const btnOrderCall = document.querySelectorAll(".order-call");
const modalWindow = document.querySelector(".modal-window");
const btnClose = document.querySelector(".close");

let indexBtn = 0;

while (indexBtn < btnOrderCall.length){
    btnOrderCall[indexBtn].onclick = function () {
        modalWindow.style.display = "flex";
    }
    indexBtn++;
}

/* btnClose.onclick = function () {
    modalWindow.style.display = "None";
}
 */
