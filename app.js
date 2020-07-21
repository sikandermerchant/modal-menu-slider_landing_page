const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

///Toggle navigation

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

//Show Modal
open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

//Hide Modal
close.addEventListener('click', () => {
  modal.classList.remove('show-modal')
})

//hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false)