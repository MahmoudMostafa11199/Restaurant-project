import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import Service from '../components/Service';
import IconSlider from '../components/IconSlider';

function About() {
  return (
    <main className="about">
      <section className="about-section">
        <div className="container overflow-auto">
          <div className="row section-title aos-init aos-animate text-center">
            <div className="col-12">
              <h4>
                "Discover the Essence of culinary Excellence at [The Kafika]"
              </h4>
              <p className="underline"></p>
              <p className="about-text">
                Experience the epitome of culinary artistry at The Kafika, where
                every dish is a masterpiece crafted with passion and precision.
                Nestled in the heart of [City/Location], our restaurant is a
                haven for food enthusiasts seeking unparalleled dining
                experiences. From tantalizing appetizers to exquisite mains and
                divine desserts, each creation reflects our unwavering
                commitment to quality and innovation. Immerse yourself in our
                warm and inviting ambiance, where every visit promises to awaken
                your senses and leave lasting memories. Join us at The Kafika
                and embark on a culinary journey that celebrates the essence of
                excellence in every bite.
              </p>
            </div>
          </div>
          <div className="row section-content">
            <div className="col-md-5 about-img">
              <img
                src="images/about-banner-img.png"
                className="img-fluid"
                alt="about-banner-img"
              />
            </div>
            <div className="col-md-6 ms-md-5 about-content position-relative">
              <h6 className="title fw-medium">About Us</h6>
              <h3 className="">
                Quality and Healthy Food is <span>Our Promise</span> to You
              </h3>
              <p className="mt-4 text mb-2">
                Indulge in our commitment to quality and health with every bite
                of our delicious food offerings, crafted with care and using
                only the freshest ingredients to nourish your body and soul.
              </p>

              <ul className="d-flex justify-content-between flex-wrap p-0 my-5 me-md-4">
                <Link to="/" className="mb-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-icon me-1 mb-md-2"
                  />
                  Food Inventory Management
                </Link>

                <Link to="/" className="mb-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-icon me-1 mb-md-2"
                  />
                  Customer Feedback Platform
                </Link>

                <Link to="/" className="mb-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-icon me-1 mb-md-2"
                  />
                  Dining Reservation System
                </Link>
                <Link to="/" className="mb-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="arrow-icon me-1 mb-md-2"
                  />
                  Dining Reservation System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Link>
              </ul>

              <Button btnType="secondary" linkTo="/services">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Service />

      <IconSlider />
    </main>
  );
}

export default About;
