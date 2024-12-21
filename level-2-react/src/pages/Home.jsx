import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Portfolio from '../components/Portfolio';
import Reservation from '../components/Reservation';
import RestaurantVideo from '../components/RestaurantVideo';
import LatestArticles from '../components/LatestArticles';
import TestominalSection from '../components/Services/TestominalSection';
import MapContainer from '../components/Map';
import Button from '../components/Button';

function Home() {
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
                      <LazyLoad height={20}>
                        <img
                          src="/images/Home/icons/discount-vector.png"
                          alt="Discount Icon"
                        />
                      </LazyLoad>
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
                      <Link to="/">
                        <LazyLoad height={95} className="d-inline-block">
                          <img
                            src="/images/Home/play-btn-vector.png"
                            alt="Play btn"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          />
                        </LazyLoad>
                      </Link>
                    </div>
                    <LazyLoad height={70}>
                      <img
                        src="/images/Home/icons/vector-arrow.png"
                        className="arrowVector"
                        alt="vector arrow"
                      />
                    </LazyLoad>
                  </div>
                </div>
                <div className="hero-baner">
                  <LazyLoad height={500}>
                    <img
                      src="/images/Home/plateSalate.png"
                      alt="plate state images"
                    />
                  </LazyLoad>
                </div>
              </div>
              <LazyLoad height={15}>
                <img
                  src="/images/Home/icons/dot-vector.png"
                  alt="dot vector icons"
                  className="dot-vector-one"
                />
              </LazyLoad>
              <LazyLoad height={25}>
                <img
                  src="/images/Home/icons/dot-large-vector.png"
                  alt="dot large vector icons"
                  className="dot-vector-two"
                />
              </LazyLoad>
              <LazyLoad height={15}>
                <img
                  src="/images/Home/icons/dot-vector.png"
                  alt="dot vector icons"
                  className="dot-vector-three"
                />
              </LazyLoad>
              <LazyLoad height={25}>
                <img
                  src="/images/Home/icons/dot-large-vector.png"
                  alt="dot large vector icons"
                  className="dot-vector-four"
                />
              </LazyLoad>
            </div>
            <div className="sochila col-lg-1">
              <Link to="https://facebook.com/cookdooreg" target="_blank">
                <LazyLoad height={25}>
                  <img
                    src="/images/Home/icons/social/facebook-icon.png"
                    alt="Facbook icon"
                  />
                </LazyLoad>
              </Link>
              <Link to="https://google.c.ukm/" target="_blank">
                <LazyLoad height={25}>
                  <img
                    src="/images/Home/icons/social/google-icon.png"
                    alt="Google icon"
                  />
                </LazyLoad>
              </Link>
              <Link to="https://instagram.com/" target="_blank">
                <LazyLoad height={25}>
                  <img
                    src="/images/Home/icons/social/instagram-icon.png"
                    alt="Instegram icon"
                  />
                </LazyLoad>
              </Link>
              <Link to="https://x.com/@X?mx=2" target="_blank">
                <LazyLoad height={25}>
                  <img
                    src="/images/Home/icons/social/twitter-icon.png"
                    alt="Twitter icon"
                  />
                </LazyLoad>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="MainPageSectionTwo py-5">
        <div className="container ">
          <div className="row Features-Section row-gap-5">
            <div className="Feature col-lg-4 col-md-6 col-sm-12">
              <div className="icon">
                <LazyLoad height={65}>
                  <img
                    src="/images/Home/icons/FastestDilevery.svg"
                    alt="Fastest Dilevery img"
                  />
                </LazyLoad>
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
                <LazyLoad height={65}>
                  <img
                    src="/images/Home/icons/FreshFood.svg"
                    alt="Fresh Food img"
                  />
                </LazyLoad>
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
                <LazyLoad height={65}>
                  <img
                    src="/images/Home/icons/QualityFood.svg"
                    alt="Quality Food img"
                  />
                </LazyLoad>
              </div>
              <div className="content">
                <h5>fresh Food</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
            </div>
            <div className="WatermarkFood">
              <LazyLoad height={130}>
                <img src="/images/Home/icons/foodIcon.png" alt="Food" />
              </LazyLoad>
            </div>
          </div>

          <div className="row baners-Section">
            <div className="col-lg-6 FirstBaner col-md-12">
              <div className="baner-content">
                <h5>panner bater masla</h5>
                <p>
                  paneer (indian cottage cheese) cooked ina kiscious, creamy
                  tomato-based gravy It's flavtired with aromatic apicne like
                  garam mapala, cumin and coriander, and Finished with a touch
                  of butter for richness and flavor
                </p>
                <Link to="/" className="baner-info">
                  learn More
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
              <div className="baner-img">
                <LazyLoad height={400}>
                  <img
                    src="/images/Home/Capture.PNG"
                    className="img-fluid"
                    alt="Table in Restaurant"
                  />
                </LazyLoad>
              </div>
            </div>
            <div className="col-lg-6 secondBaner col-md-12">
              <div className="baner-img">
                <LazyLoad height={400}>
                  <img
                    src="/images/Home/pizaSlice.PNG"
                    className="img-fluid"
                    alt="Pizza Slice"
                  />
                </LazyLoad>
              </div>
              <div className="baner-content">
                <h5>panner bater masla</h5>
                <p>
                  featuring tender cabbage and viorant green pass sautned with
                  womatic apicea. This nutritious and flavorful vegetarian
                  option im perfect for theos seeking a wholesome meal bursting
                  with trechnens anos tiate Ergoy it as a standalone ish or pair
                  it with your favorire pocompariments for a satisfying dining
                  experience that will leave you craving for more
                </p>
              </div>
            </div>
            <div className="WatermarkFood">
              <LazyLoad height={130}>
                <img src="/images/Home/icons/food.png" alt="Food" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="main-title-two position-relative aos-init aos-animate">
          <h3>Our Popular Foods</h3>
          <img src="/images/title-border.png" alt="title-border" />
          <h2>Top Food Menu Selection</h2>
        </div>
        <Portfolio />
      </section>

      {/*  Start Table Reservation Section   */}
      <section className="table-reservation position-relative">
        <LazyLoad height={60}>
          <img
            src="/images/plate-icon-07.svg"
            className="plate-icon"
            alt="plate-icon"
          />
        </LazyLoad>
        <div className="container">
          <div className="row">
            <div className="order d-flex align-items-center justify-content-center flex-column">
              <h6>Place Your Order Online</h6>
              <h3>Enjoy a 10% Discount on Your First Order</h3>
              <p>
                Place your meal order online today and enjoy a special 10%
                discount on your first purchase. Don't miss out on this
                exclusive offer! Order now to save on your delicious meal.
              </p>
              <Reservation />
            </div>
          </div>
        </div>
      </section>
      {/* End Table Reservation Section  */}

      <TestominalSection />

      {/*  Start Restaurant Video Section   */}
      <RestaurantVideo />
      {/*  End Restaurant Video Section   */}

      {/*  Start Latest Articles Section   */}
      <LatestArticles />
      {/*  End Latest Articles Section   */}

      {/*  Start Map Section   */}
      <section className="map-section py-5">
        <MapContainer />
      </section>
      {/*  End Map Section   */}
    </main>
  );
}

export default Home;
