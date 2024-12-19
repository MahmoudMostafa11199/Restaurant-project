//////////////////////////////////////////////////
// Contact
const animatedElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.1,
  }
);

animatedElements.forEach((element) => observer.observe(element));

//////////////////////////////////////////////////
// Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  loop: true,
  centredSlides: true,
  speed: 5000,
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disabledOnInteraction: false,
  },
});

//////////////////////////////////////////////////
// Play Video
function playVideo() {
  const thumbnail = document.getElementById('thumbnail');
  const videoContainer = document.getElementById('video-container');

  thumbnail.style.display = 'none';
  videoContainer.style.display = 'block';
}
