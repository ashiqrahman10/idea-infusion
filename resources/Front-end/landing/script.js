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
