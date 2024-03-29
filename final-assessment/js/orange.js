//schedule js

// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal() {
    modal.style.display = 'flex';
}

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}


// get modal element
var modalTwo = document.getElementById('simpleModalTwo');
// get open modal button
var modalBtnTwo = document.getElementById('modalBtnTwo');
// Get close button
var closeBtnTwo = document.getElementsByClassName('closeBtnTwo')[0];

// listen for open click
modalBtnTwo.addEventListener('click', openModalTwo);
// listen for close click
closeBtnTwo.addEventListener('click', closeModalTwo);

// function to open modal
function openModalTwo() {
    modalTwo.style.display = 'flex';
}
// function to close modal
function closeModalTwo() {
    modalTwo.style.display = 'none';
}
