// importujemy obrazki Parcel-em
import imacImg from './images/imac.jpeg';
import starActive from './images/star-active.svg';
import starInactive from './images/star.svg';

// ustawiamy główny obrazek
document.getElementById('product-img').src = imacImg;

// ustawiamy gwiazdki
const starsContainer = document.querySelector('.stars');
const stars = starsContainer.querySelectorAll('.stars__star');
const rating = parseInt(starsContainer.className.match(/stars--(\d)/)[1], 10);

stars.forEach((star, index) => {
  star.style.backgroundImage = index < rating ? `url(${starActive})` : `url(${starInactive})`;
});
