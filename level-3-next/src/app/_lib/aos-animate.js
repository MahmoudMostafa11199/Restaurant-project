'use client';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosComponent() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return null;
}
