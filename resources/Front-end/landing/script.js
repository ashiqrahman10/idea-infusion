const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');

nextBtn.addEventListener("click", function(event) {
  const blog = document.querySelector('.blogs');
  blog.scrollLeft += 100;
  event.preventDefault();
});

backBtn.addEventListener("click", function(event) {
  const blog = document.querySelector('.blogs');
  blog.scrollLeft -= 100;
  event.preventDefault();
});

const nextBtn2 = document.querySelector('#next2');
const backBtn2= document.querySelector('#back2');

nextBtn2.addEventListener("click", function(event) {
  const cf = document.querySelector('.cframe');
  cf.scrollLeft += 100;
  event.preventDefault();
});

backBtn2.addEventListener("click", function(event) {
  const cf = document.querySelector('.cframe');
  cf.scrollLeft -= 100;
  event.preventDefault();
});
