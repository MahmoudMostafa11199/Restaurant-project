import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    duration: 600,
    offset: 100,
    easing: 'ease-in-out',
    once: true,
  });
};
