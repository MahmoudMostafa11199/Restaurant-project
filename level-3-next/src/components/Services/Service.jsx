import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import FramerAnimated from '../FramerAnimated';

function Service() {
  return (
    <section className="service-section">
      <div className="container text-center">
        <div className="mb-5">
          <FramerAnimated direction="up">
            <div className="d-flex justify-content-center gap-4 mb-2">
              <Image
                src="/images/service/left-leaf-icon.svg"
                alt="Decorative left leaf icon"
                width={25}
                height={25}
              />
              <h2 className="heading__secondary heading__secondary--small u-heading-compressed">
                Our Services
              </h2>
              <Image
                src="/images/service/right-leaf-icon.svg"
                alt="Decorative right leaf icon"
                width={25}
                height={25}
              />
            </div>
            <p className="sub__heading sub__heading--large u-heading-compressed">
              Top Food Menu Selection
            </p>
          </FramerAnimated>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 services">
          <div className="mb-4 mb-lg-0">
            <FramerAnimated direction="up">
              <div className="service">
                <Image
                  src="/images/service/services-icon-1.svg"
                  alt="Icon representing quality food"
                  className="service__icon mb-5"
                  width={75}
                  height={75}
                />
                <h4 className="service__title mb-4">Quality Food</h4>
                <p className="service__text">
                  Delight in the excellence of our culinary creations, crafted
                  with care and attention to detail for your ultimate
                  satisfaction.
                </p>
                <Link href="/services" className="service__link">
                  <span className="service__link-text"> Learn More </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="service__link-icon"
                  />
                </Link>
              </div>
            </FramerAnimated>
          </div>

          <div className="mb-4 mb-md-0">
            <FramerAnimated direction="up">
              <div className="service">
                <Image
                  src="/images/service/services-icon-2.svg"
                  alt="Icon representing fast delivery service"
                  className="service__icon mb-5"
                  width={75}
                  height={75}
                />
                <h4 className="service__title mb-4">Fastest Delivery</h4>
                <p className="service__text">
                  Prompt and efficient delivery service ensuring your food
                  arrives fresh and delicious right to your doorstep in no time.
                </p>
                <Link href="/services" className="service__link">
                  <span className="service__link-text"> Learn More </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="service__link-icon"
                  />
                </Link>
              </div>
            </FramerAnimated>
          </div>

          <div className="mb-4 mb-sm-0">
            <FramerAnimated direction="up">
              <div className="service">
                <Image
                  src="/images/service/services-icon-3.svg"
                  alt="Icon representing fresh food preparation"
                  className="service__icon mb-5"
                  width={75}
                  height={75}
                />
                <h4 className="service__title mb-4">Fresh Food</h4>
                <p className="service__text">
                  Delicious and nutritious meals prepared with fresh
                  ingredients, ensuring every bite is bursting with flavor and
                  goodness.
                </p>
                <Link href="/services" className="service__link">
                  <span className="service__link-text"> Learn More </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="service__link-icon"
                  />
                </Link>
              </div>
            </FramerAnimated>
          </div>

          <div>
            <FramerAnimated direction="up">
              <div className="service">
                <Image
                  src="/images/service/services-icon-4.svg"
                  alt="Icon representing easy ordering process"
                  className="service__icon mb-5"
                  width={75}
                  height={75}
                />
                <h4 className="service__title mb-4">Easy to Order</h4>
                <p className="service__text">
                  Simple and convenient ordering process, making it effortless
                  for you to enjoy your favorite meals whenever you desire.
                </p>
                <Link href="/services" className="service__link">
                  <span className="service__link-text"> Learn More </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="service__link-icon"
                  />
                </Link>
              </div>
            </FramerAnimated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
