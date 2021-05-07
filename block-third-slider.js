let position = 0;
const conteiner = document.querySelector(".slider-conteiner");
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider-item");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const headItems = document.querySelectorAll(".slider-head_item");

let i = 0;
while (i < headItems.length) {
    let a = i;
    headItems[i].onclick = function(){
       
        paintPrev(position);
        paintNext(a);
        position = a;
    };
    i++;
}
btnPrev.onclick = function() {
    paintPrev(position);
    position--;
    if(position < 0){
        position = items.length - 1;
    };
    paintNext(position);
};
btnNext.onclick = function() {
    paintPrev(position);
    position++;
    if(position > items.length - 1){
        position = 0;
    }
    paintNext(position);
};
items[position].style.display = 'flex';
headItems[position].style.color = 'white';
headItems[position].style.backgroundColor = '#4077BD';

/* функция которая красит */
function paintPrev(thisPosition) {
    items[thisPosition].style.display = 'none';
    headItems[thisPosition].style.color = 'black';
    headItems[thisPosition].style.backgroundColor = 'white';
}
function paintNext(nextPosition) {
    items[nextPosition].style.display = 'flex';
    headItems[nextPosition].style.color = 'white';
    headItems[nextPosition].style.backgroundColor = '#4077BD';
}
