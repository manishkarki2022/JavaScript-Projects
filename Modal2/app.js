let openPopupBtn = document.querySelector('#open-popup-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');
console.log(popupCloseBtn);

openPopupBtn.addEventListener('click',function(){
    document.body.classList.add('popup-active');
})
popupCloseBtn.addEventListener('click',function(){
    document.body.classList.remove('popup-active');
})