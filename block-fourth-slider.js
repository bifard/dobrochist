let positions = 0;

const itemWidth = 300; // Дефолтная ширина карточки
const trackItem = document.querySelectorAll(".track_item"); // массив карточек

const catalogeBtnPrev = document.querySelector(".cataloge_btn-prev"); // кнопка назад
const catalogeBtnNext = document.querySelector(".cataloge_btn-next"); // кнопка вперед

const catalogeTrackWidth = document.querySelector('.cataloge_track').offsetWidth; // ширина контейнера карточек

let arry = [];
for (let index = 0; index < trackItem.length; index++) {
    arry.push(trackItem[index]);
};

function delenie(x, y){
    return (x - x % y) / y;
}; 

let numberMove = delenie(catalogeTrackWidth, itemWidth);// Колличество карточек за скролл
console.log(numberMove);
if( numberMove == 0){
    numberMove = 1;
};
console.log(numberMove);
/* Показываем первые карточки */

function displayItemsFirst(numberItem, arry, positions) {
   if((positions+numberMove) <= arry.length) {
        let z = 0;
        while (z < numberItem){
            arry[positions].style.display = "block";
            positions++;
            z++;
        };
    }else {
        while(positions < arry.length){
            arry[positions].style.display = "block";
            positions++;
        }
    }
};
displayItemsFirst(numberMove, arry, positions);

function displayNone(itemObject){
    for (let i = 0; i < itemObject.length; i++) {
        if (itemObject[i].style.display == "block"){
            itemObject[i].style.display = "none"
        }; 
    };
};
function displayBlockNext(itemObject, positions, numberMove) {
    if(positions+numberMove <= itemObject.length){
        for (let i = positions; i < positions+numberMove; i++) {
            itemObject[i].style.display = "block"
        };
    }else {
        for (let i = itemObject.length-1; i > (itemObject.length - numberMove - 1); i--) {
            itemObject[i].style.display = "block"
        };
    };
};


function displayBlockPrev(itemObject, positionsIndex, numberMove) 
{
    if(positionsIndex-numberMove == 0){
        for (let i = 1; i < numberMove+1; i++) 
        {
            itemObject[i].style.display = "block"
        };
    }   
    else{
        if(positionsIndex-numberMove < 0){
            for (let i = 0; i < numberMove; i++) {
                ;itemObject[i].style.display = "block"
            };
        }
        else{
            for (let i = positionsIndex; i > (positionsIndex - numberMove); i--)  { 
                    itemObject[i].style.display = "block"
                };
            };
        }
}


catalogeBtnNext.onclick = function() {
    let indexMax = 0;
    for (let index = 0; index < arry.length; index++) {
        if(arry[index].style.display == "block"){
        indexMax = index;
        };
    };

    displayNone(arry);
    displayBlockNext(arry, indexMax+1, numberMove);
};

catalogeBtnPrev.onclick = function() {
    let indexMin = 0;
    for (let index = 0; index < arry.length; index++) {
        if(arry[index].style.display == "block"){
        indexMin = index;
        break;
        };
    };

    displayNone(arry);
    displayBlockPrev(arry, indexMin -1 , numberMove);
};











































