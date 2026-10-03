const printCards = document.querySelectorAll('.print-card');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
 
printCards.forEach(card => {
 
  const image = card.querySelector('img');
 
  card.addEventListener('click', () => {
 
    modalImage.src = image.src;
    modalImage.alt = image.alt;
 
    modal.classList.add('active');
 
  });
 
});
 
closeModal.addEventListener('click', () => {
 
  modal.classList.remove('active');
 
});
 
modal.addEventListener('click', (event) => {
 
  if(event.target === modal){
    modal.classList.remove('active');
  }
 
});
 
document.addEventListener('keydown', (event) => {
 
  if(event.key === 'Escape'){
    modal.classList.remove('active');
  }
 
});