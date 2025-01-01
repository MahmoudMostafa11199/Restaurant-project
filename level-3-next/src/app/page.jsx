import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import TestominalSection from '@/components/Services/TestominalSection';
import RestaurantVideo from '@/components/RestaurantVideo';
import Reservation from '@/components/Reservation';
import Portfolio from '@/components/Portfolio';
import LatestArticles from '@/components/Article/LatestArticles';
import MapContainer from '@/components/Map';
import Button from '@/components/Button';
import FramerAnimated from '@/components/FramerAnimated';

export default function Home() {
  return (
    <main className="home">
      <section className="baner-header position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="food-experinse col-lg-11 col-sm-12">
              <FramerAnimated direction="up">
                <div className="hero d-flex">
                  <div className="hero-Heading">
                    <div className="hero-Detalis">
                      <p className="sub-content">
                        <Image
                          src="/images/home/icons/discount-vector.png"
                          alt="Discount vector image"
                          className="me-1"
                          width={20}
                          height={20}
                        />
                        10% Discount For 2 Order
                      </p>
                      <h1>
                        Enjoy The Delicious
                        <span style={{ color: '#B28E6A' }}> Food</span>{' '}
                        Experience
                      </h1>
                      <p>
                        Indulge in the delightful culinary journey of our menu
                        offerings, promising an unforgettable experience for
                        your taste buds.
                      </p>
                      <div className="order-Now">
                        <Button btnType="secondary" linkTo="/contact">
                          Order Now
                        </Button>
                        <Link href="/">
                          <div className="d-inline-block">
                            <Image
                              src="/images/home/play-btn-vector.png"
                              alt="Play btn"
                              width={75}
                              height={90}
                            />
                          </div>
                        </Link>
                      </div>
                      <Image
                        src="/images/home/icons/vector-arrow.png"
                        className="arrowVector"
                        alt="vector arrow"
                        width={300}
                        height={70}
                      />
                    </div>
                  </div>
                  <div className="hero-baner">
                    <Image
                      src="/images/home/plateSalate.png"
                      alt="plate state images"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </FramerAnimated>
              <Image
                src="/images/home/icons/dot-vector.png"
                alt="dot vector icons"
                className="dot-vector-one"
                width={15}
                height={15}
              />
              <Image
                src="/images/home/icons/dot-large-vector.png"
                alt="dot large vector icons"
                className="dot-vector-two"
                width={25}
                height={25}
              />
              <Image
                src="/images/home/icons/dot-vector.png"
                alt="dot vector icons"
                className="dot-vector-one"
                width={15}
                height={15}
              />
              <Image
                src="/images/home/icons/dot-large-vector.png"
                alt="dot large vector icons"
                className="dot-vector-two"
                width={25}
                height={25}
              />
            </div>

            <div className="sochila col-lg-1">
              <FramerAnimated direction="up">
                <Link href="https://facebook.com/cookdooreg" target="_blank">
                  <Image
                    src="/images/home/icons/social/facebook-icon.png"
                    alt="Facbook icon"
                    width={20}
                    height={30}
                  />
                </Link>
                <Link href="https://google.c.ukm/" target="_blank">
                  <Image
                    src="/images/home/icons/social/google-icon.png"
                    alt="Google icon"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://instagram.com/" target="_blank">
                  <Image
                    src="/images/home/icons/social/instagram-icon.png"
                    alt="Instegram icon"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href="https://x.com/@X?mx=2" target="_blank">
                  <Image
                    src="/images/home/icons/social/twitter-icon.png"
                    alt="Twitter icon"
                    width={25}
                    height={25}
                  />
                </Link>
              </FramerAnimated>
            </div>
          </div>
        </div>
      </section>

      <section className="MainPageSectionTwo py-5">
        <div className="container">
          <div className="row features-Section row-gap-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <FramerAnimated direction="up">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/home/icons/FastestDilevery.svg"
                      alt="Fastest Dilevery img"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="content">
                    <h5>Quality Food</h5>
                    <span className="text-muted">
                      Height quality ingerdiants ensure the best taste and
                      satation
                    </span>
                  </div>
                  <span className="line d-none d-md-inline-block"></span>
                </div>
              </FramerAnimated>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <FramerAnimated direction="up">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/home/icons/FreshFood.svg"
                      alt="Fresh Food img"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="content">
                    <h5>fastest Delelviry</h5>
                    <span className="text-muted">
                      Height quality ingerdiants ensure the best taste and
                      satation
                    </span>
                  </div>
                  <span className="line d-none d-lg-inline-block"></span>
                </div>
              </FramerAnimated>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <FramerAnimated direction="up">
                <div className="feature">
                  <div className="icon">
                    <Image
                      src="/images/home/icons/QualityFood.svg"
                      alt="Quality Food img"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="content">
                    <h5>fresh Food</h5>
                    <span className="text-muted">
                      Height quality ingerdiants ensure the best taste and
                      satation
                    </span>
                  </div>
                </div>
              </FramerAnimated>
            </div>
            <div className="WatermarkFood">
              <Image
                src="/images/home/icons/foodIcon.png"
                alt="Food"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="row baners-Section">
            <div className="row m-0 baner-content">
              <div className="col-12 col-md-6 p-0 baner-one order-2 order-md-0 mb-5 mb-md-0">
                <FramerAnimated direction="right">
                  <div className="bg-light baner-item baner-text">
                    <h4 className="baner-title mb-4">Panner Bater Masala</h4>
                    <p className="baner-description mb-5">
                      Paneer Butter Masala is a classic North Indian dish made
                      with paneer (Indian cottage cheese) cooked ina kiscious,
                      creamy tomato-based gravy It&apos;s flavtired with
                      aromatic apicne like garam mapala, cumin and coriander,
                      and Finished with a touch of butter for richness and
                      flavor
                    </p>
                    <Link
                      href="/services"
                      className="baner-info d-flex align-items-center gap-1"
                    >
                      Learn More
                      <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                  </div>
                </FramerAnimated>
              </div>
              <div className="col-12 col-md-6 p-0 baner-one">
                <FramerAnimated direction="left" style={{ height: '100%' }}>
                  <div className="baner-item baner-img">
                    <Image
                      src="/images/home/pizaSlice.png"
                      alt="Table in Restaurant"
                      className="w-100 h-100 object-fit-cover opacity-75"
                      width={700}
                      height={400}
                    />
                  </div>
                </FramerAnimated>
              </div>
            </div>

            <div className="row m-0 baner-content">
              <div className="col-12 col-md-6 p-0 baner-two">
                <FramerAnimated direction="right" style={{ height: '100%' }}>
                  <div className="baner-item baner-img">
                    <Image
                      src="/images/home/Capture.png"
                      alt="Table in Restaurant"
                      className="w-100 h-100 object-fit-cover opacity-75"
                      width={700}
                      height={400}
                    />
                  </div>
                </FramerAnimated>
              </div>
              <div className="col-12 col-md-6 p-0 baner-two">
                <FramerAnimated direction="left">
                  <div className="bg-light baner-item baner-text">
                    <h4 className="baner-title mb-4">
                      Cabbage With Green Peas
                    </h4>
                    <p className="baner-description mb-5">
                      Savor the delightful flavors of our Cabbage with Green
                      Peas dish, featuring tender cabbage and vibrant green peas
                      sautéed with aromatic spices. This nutritious and
                      flavorful vegetarian option is perfect for those seeking a
                      wholesome meal bursting with freshness and taste. Enjoy it
                      as a standalone dish or pair it with your favorite
                      accompaniments for a satisfying dining experience that
                      will leave you craving for more.
                    </p>
                  </div>
                </FramerAnimated>
              </div>
            </div>

            <div className="WatermarkFood">
              <Image
                src="/images/home/icons/food.png"
                alt="Food"
                width={130}
                height={130}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="main-title-two position-relative aos-init aos-animate">
          <FramerAnimated direction="zoom">
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
          </FramerAnimated>
        </div>

        <Portfolio />
      </section>

      <section className="table-reservation position-relative">
        <FramerAnimated direction="zoom">
          <Image
            src="/images/home/icons/plate-icon-07.svg"
            className="plate-icon"
            alt="plate-icon"
            width={150}
            height={60}
          />
          <div className="container">
            <div className="row">
              <div className="order d-flex align-items-center justify-content-center flex-column">
                <FramerAnimated direction="up">
                  <h6>Place Your Order Online</h6>
                </FramerAnimated>
                <FramerAnimated direction="up">
                  <h3>Enjoy a 10% Discount on Your First Order</h3>
                </FramerAnimated>
                <FramerAnimated direction="up">
                  <p>
                    Place your meal order online today and enjoy a special 10%
                    discount on your first purchase. Don&apos;t miss out on this
                    exclusive offer! Order now to save on your delicious meal.
                  </p>
                </FramerAnimated>

                <Reservation />
              </div>
            </div>
          </div>
        </FramerAnimated>
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
