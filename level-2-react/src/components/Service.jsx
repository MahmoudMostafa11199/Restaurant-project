import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
    <section className="service-section">
      <div className="container text-center">
        <div className="mb-5">
          <div className="d-flex justify-content-center gap-4 mb-2">
            <LazyLoad height={25}>
              <img
                src="/images/service/left-leaf-icon.svg"
                alt="Decorative left leaf icon"
              />
            </LazyLoad>
            <h2 className="heading__secondary heading__secondary--small u-heading-compressed">
              Our Services
            </h2>
            <LazyLoad height={25}>
              <img
                src="/images/service/right-leaf-icon.svg"
                alt="Decorative right leaf icon"
              />
            </LazyLoad>
          </div>
          <p className="sub__heading sub__heading--large u-heading-compressed">
            Top Food Menu Selection
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 services">
          <div className="mb-4 mb-lg-0">
            <div className="service">
              <LazyLoad height={75}>
                <img
                  src="/images/service/services-icon-1.svg"
                  alt="Icon representing quality food"
                  className="service__icon mb-5"
                />
              </LazyLoad>
              <h4 className="service__title mb-4">Quality Food</h4>
              <p className="service__text">
                Delight in the excellence of our culinary creations, crafted
                with care and attention to detail for your ultimate
                satisfaction.
              </p>
              <Link to="/services" className="service__link">
                <span className="service__link-text"> Learn More </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="service__link-icon"
                />
              </Link>
            </div>
          </div>

          <div className="mb-4 mb-md-0">
            <div className="service">
              <LazyLoad height={75}>
                <img
                  src="/images/service/services-icon-2.svg"
                  alt="Icon representing fast delivery service"
                  className="service__icon mb-5"
                />
              </LazyLoad>
              <h4 className="service__title mb-4">Fastest Delivery</h4>
              <p className="service__text">
                Prompt and efficient delivery service ensuring your food arrives
                fresh and delicious right to your doorstep in no time.
              </p>
              <Link to="/services" className="service__link">
                <span className="service__link-text"> Learn More </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="service__link-icon"
                />
              </Link>
            </div>
          </div>

          <div className="mb-4 mb-sm-0">
            <div className="service">
              <LazyLoad height={75}>
                <img
                  src="/images/service/services-icon-3.svg"
                  alt="Icon representing fresh food preparation"
                  className="service__icon mb-5"
                />
              </LazyLoad>
              <h4 className="service__title mb-4">Fresh Food</h4>
              <p className="service__text">
                Delicious and nutritious meals prepared with fresh ingredients,
                ensuring every bite is bursting with flavor and goodness.
              </p>
              <Link to="/services" className="service__link">
                <span className="service__link-text"> Learn More </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="service__link-icon"
                />
              </Link>
            </div>
          </div>

          <div>
            <div className="service">
              <LazyLoad height={75}>
                <img
                  src="/images/service/services-icon-4.svg"
                  alt="Icon representing easy ordering process"
                  className="service__icon mb-5"
                />
              </LazyLoad>
              <h4 className="service__title mb-4">Easy to Order</h4>
              <p className="service__text">
                Simple and convenient ordering process, making it effortless for
                you to enjoy your favorite meals whenever you desire.
              </p>
              <Link to="/services" className="service__link">
                <span className="service__link-text"> Learn More </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="service__link-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
