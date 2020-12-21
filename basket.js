const modalWindow = document.querySelector('.basket-window');
const showBtn = document.querySelector('#basket');
const hideBtn = document.querySelector('#cls');

showBtn.addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
});

hideBtn.addEventListener('click', function () {
    modalWindow.classList.remove('animate__backInDown');
    modalWindow.classList.add('animate__backOutUp');
    setTimeout( function(){
        modalWindow.classList.remove('animate__backOutUp');
        modalWindow.classList.add('hidden','animate__backInDown');
    }, 1000 );

});
