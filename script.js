prevImg = 0;
currentImg = 1;
nextImg = 2;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const photo1 = document.querySelector('.photo1');
const photo2 = document.querySelector('.photo2');
const photo3 = document.querySelector('.photo3');

const imgs = ['img1', 'img2', 'img3'];

nextBtn.addEventListener('click', () => {
  if (currentImg <= 0) {
    currentImg = imgs.length;
  }
  if (prevImg <= 0) {
    prevImg = imgs.length;
  }
  if (nextImg <= 0) {
    nextImg = imgs.length;
  }

  currentImg--;
  prevImg--;
  nextImg--;

  showSlides(prevImg, currentImg, nextImg);
});

prevBtn.addEventListener('click', () => {
  currentImg++;
  prevImg++;
  nextImg++;

  if (currentImg >= imgs.length) {
    currentImg = 0;
  }
  if (prevImg >= imgs.length) {
    prevImg = 0;
  }
  if (nextImg >= imgs.length) {
    nextImg = 0;
  }

  showSlides(prevImg, currentImg, nextImg);
});

function showSlides(item0, item1, item2) {
  photo1.src = `./img/${imgs[item0]}.jpg`;
  photo2.src = `./img/${imgs[item1]}.jpg`;
  photo3.src = `./img/${imgs[item2]}.jpg`;
}
