const button = document.getElementById('button');
const share = document.getElementById('share');
const buttonClose = document.querySelector('.buttonClose');

button.addEventListener('click', () => {
  share.classList.toggle('active');
});

buttonClose.addEventListener('click', () => {
  share.classList.toggle('active');
});
