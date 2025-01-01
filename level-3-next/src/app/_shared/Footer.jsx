import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneFlip,
  faAt,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import Logo from '@/components/Logo';
import Social from '@/components/Social';

function Footer() {
  return (
    <footer className="footer">
      <div className="container" data-aos="fade-in">
        <div className="pb-5">
          <div className="row justify-content-between">
            <div className="col-sm-6 col-lg-3 mb-5 mb-lg-0 pe-sm-5">
              <div className="footer__col">
                <Logo />

                <p className="mt-5 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has...
                </p>

                <Social />
              </div>
            </div>

            <div className="col-sm-6 col-lg-2 mb-5 mb-lg-0">
              <div className="footer__col">
                <h2 className="footer__title position-relative">Menu</h2>

                <div className="footer__links">
                  <Link className="footer__link" href="/">
                    Home
                  </Link>

                  <Link className="footer__link" href="/about">
                    About Us
                  </Link>

                  <Link className="footer__link" href="/services">
                    Reservation
                  </Link>

                  <Link className="footer__link" href="/blog">
                    Blogs
                  </Link>

                  <Link className="footer__link" href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2 mb-5 mb-md-0">
              <div className="footer__col">
                <h2 className="footer__title position-relative">Services</h2>

                <div className="footer__links">
                  <Link className="footer__link" href="/services">
                    Services 01
                  </Link>
                  <Link className="footer__link" href="/services">
                    Services 02
                  </Link>
                  <Link className="footer__link" href="/services">
                    Services 03
                  </Link>
                  <Link className="footer__link" href="/services">
                    Services 04
                  </Link>
                  <Link className="footer__link" href="/services">
                    Services 05
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 ">
              <div className="footer__col">
                <h2 className="footer__title position-relative">Find Us</h2>

                <div className="footer__contact">
                  <ul className="footer__links">
                    <li className="footer__contact-items">
                      <FontAwesomeIcon icon={faPhoneFlip} />
                      <a href="tel:911234567890" className="footer__link">
                        +91 12 34 56 78 90
                      </a>
                    </li>

                    <li className="footer__contact-items">
                      <FontAwesomeIcon icon={faAt} />
                      <a
                        href="mailto:info@thekafika.com"
                        className="footer__link"
                      >
                        info@thekafika.com
                      </a>
                    </li>

                    <li className="footer__contact-items">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <a
                        href="https://maps.google.com/"
                        className="footer__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        3891 Ranchview Dr. Richardson, California 62639
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__copyright text-center">
          <p>© Copyright 2024 - TheKafika - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
