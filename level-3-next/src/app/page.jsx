import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import TestominalSection from '../components/Services/TestominalSection';
import RestaurantVideo from '../components/RestaurantVideo';
import Reservation from '../components/Reservation';
import Portfolio from '../components/Portfolio';
import LatestArticles from '../components/Article/LatestArticles';
import MapContainer from '../components/Map';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className="home">
      <section className="baner-header position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="food-experinse col-lg-11 col-sm-12">
              <div className="hero d-flex">
                <div className="hero-Heading">
                  <div className="hero-Detalis">
                    <p className="sub-content">
                      <Image
                        src="/images/home/icons/discount-vector.png"
                        alt="Discount vector image"
                        width={20}
                        height={20}
                      />
                      10% Discount For 2 Order
                    </p>
                    <h1>
                      Enjoy The Delicious
                      <span style={{ color: '#B28E6A' }}> Food</span> Experience
                    </h1>
                    <p>
                      Indulge in the delightful culinary journey of our menu
                      offerings, promising an unforgettable experience for your
                      taste buds.
                    </p>
                    <div className="order-Now">
                      <Button btnType="secondary" linkTo="/contact">
                        Order Now
                      </Button>
                      <Link href="/">
                        <div className="d-inline-block">
                          <Image
                            src="/images/Home/play-btn-vector.png"
                            alt="Play btn"
                            width={95}
                            height={110}
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          />
                        </div>
                      </Link>
                    </div>
                    <Image
                      src="/images/Home/icons/vector-arrow.png"
                      className="arrowVector"
                      alt="vector arrow"
                      width={300}
                      height={70}
                    />
                  </div>
                </div>
                <div className="hero-baner">
                  <Image
                    src="/images/Home/plateSalate.png"
                    alt="plate state images"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <Image
                src="/images/Home/icons/dot-vector.png"
                alt="dot vector icons"
                className="dot-vector-one"
                width={15}
                height={15}
              />
              <Image
                src="/images/Home/icons/dot-large-vector.png"
                alt="dot large vector icons"
                className="dot-vector-two"
                width={25}
                height={25}
              />
              <Image
                src="/images/Home/icons/dot-vector.png"
                alt="dot vector icons"
                className="dot-vector-one"
                width={15}
                height={15}
              />
              <Image
                src="/images/Home/icons/dot-large-vector.png"
                alt="dot large vector icons"
                className="dot-vector-two"
                width={25}
                height={25}
              />
            </div>

            <div className="sochila col-lg-1">
              <Link href="https://facebook.com/cookdooreg" target="_blank">
                <Image
                  src="/images/Home/icons/social/facebook-icon.png"
                  alt="Facbook icon"
                  width={20}
                  height={25}
                />
              </Link>
              <Link href="https://google.c.ukm/" target="_blank">
                <Image
                  src="/images/Home/icons/social/google-icon.png"
                  alt="Google icon"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="https://instagram.com/" target="_blank">
                <Image
                  src="/images/Home/icons/social/instagram-icon.png"
                  alt="Instegram icon"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="https://x.com/@X?mx=2" target="_blank">
                <Image
                  src="/images/Home/icons/social/twitter-icon.png"
                  alt="Twitter icon"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="MainPageSectionTwo py-5">
        <div className="container">
          <div className="row Features-Section row-gap-5">
            <div className="Feature col-lg-4 col-md-6 col-sm-12">
              <div className="icon">
                <Image
                  src="/images/Home/icons/FastestDilevery.svg"
                  alt="Fastest Dilevery img"
                  width={65}
                  height={65}
                />
              </div>
              <div className="content">
                <h5>Quality Food</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
              <span className="line d-none d-md-inline-block"></span>
            </div>
            <div className="Feature col-lg-4 col-md-6 col-sm-12">
              <div className="icon">
                <Image
                  src="/images/Home/icons/FreshFood.svg"
                  alt="Fresh Food img"
                  width={65}
                  height={65}
                />
              </div>
              <div className="content">
                <h5>fastest Delelviry</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
              <span className="line d-none d-lg-inline-block"></span>
            </div>
            <div className="Feature col-lg-4 col-md-12 col-sm-12">
              <div className="icon">
                <Image
                  src="/images/Home/icons/QualityFood.svg"
                  alt="Quality Food img"
                  width={65}
                  height={65}
                />
              </div>
              <div className="content">
                <h5>fresh Food</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
            </div>
            <div className="WatermarkFood">
              <Image
                src="/images/Home/icons/foodIcon.png"
                alt="Food"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="main-title-two position-relative aos-init aos-animate">
          <h3 className="heading__secondary heading__secondary--small">
            Our Popular Foods
          </h3>
          <Image
            src="/images/home/title-border.png"
            alt="title-border"
            width={250}
            height={100}
          />
          <h2 className="mt-5 mt-md-4 sub__heading sub__heading--large">
            Top Food Menu Selection
          </h2>
        </div>

        <Portfolio />
      </section>

      <section className="table-reservation position-relative">
        <Image
          src="/images/home/plate-icon-07.svg"
          className="plate-icon"
          alt="plate-icon"
          width={150}
          height={60}
        />
        <div className="container">
          <div className="row">
            <div className="order d-flex align-items-center justify-content-center flex-column">
              <h6>Place Your Order Online</h6>
              <h3>Enjoy a 10% Discount on Your First Order</h3>
              <p>
                Place your meal order online today and enjoy a special 10%
                discount on your first purchase. Don&apos;t miss out on this
                exclusive offer! Order now to save on your delicious meal.
              </p>
              <Reservation />
            </div>
          </div>
        </div>
      </section>

      <TestominalSection />

      <RestaurantVideo />

      <LatestArticles />

      <section className="map-section py-5">
        <MapContainer />
      </section>
    </main>
  );
}
