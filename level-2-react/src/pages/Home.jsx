import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Portfolio from '../components/Portfolio';
import Reservation from '../components/Reservation';
import RestaurantVideo from '../components/RestaurantVideo';
import LatestArticles from '../components/LatestArticles';
import TestominalSection from '../components/Services/TestominalSection';
import MapContainer from '../components/Map';

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
                      <img
                        src="/images/home/icons/discount-vector.png"
                        alt="Discount Icon"
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
                    <div className="order-Now" style={{ display: 'inline' }}>
                      <button className="primary-btn">
                        <Link to="/">
                          <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                            orderNow
                          </span>
                        </Link>
                      </button>
                      <Link to="/">
                        <img src="/images/home/play-btn-vector.png" alt="" />
                      </Link>
                    </div>
                    <img
                      src="./assets/Icons/vector-arrow.png"
                      className="arrowVector"
                      alt=""
                    />
                  </div>
                </div>
                <div className="hero-baner">
                  <img src="/images/home/plateSalate.png" alt="" />
                </div>
              </div>
              <img
                src="/images/home/icons/dot-vector.png"
                alt=""
                className="dot-vector-one"
              />
              <img
                src="./assets/Icons/dot-large-vector.png"
                alt=""
                className="dot-vector-two"
              />
              <img
                src="./assets/Icons/dot-vector.png"
                alt=""
                className="dot-vector-three"
              />
              <img
                src="./assets/Icons/dot-large-vector.png"
                alt=""
                className="dot-vector-four"
              />
            </div>
            <div className="sochila col-lg-1">
              <img
                src="/images/home/icons/social/facebook-icon.png"
                alt="Facbook icon"
              />
              <img
                src="/images/home/icons/social/google-icon.png"
                alt="Google icon"
              />
              <img
                src="/images/home/icons/social/instagram-icon.png"
                alt="Instegram icon"
              />
              <img
                src="/images/home/icons/social/twitter-icon.png"
                alt="Twitter icon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="MainPageSectionTwo">
        <div className="container ">
          <div className="row Features-Section">
            <div className="Feature col-lg-4 col-md-6 col-sm-12">
              <div className="icon">
                <img src="/images/home/icons/FastestDilevery.svg" alt="" />
              </div>
              <div className="content">
                <h5>QualityFood</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
              <span className="line"></span>
            </div>
            <div className="Feature col-lg-4 col-md-6 col-sm-12">
              <div className="icon">
                <img src="/images/home/icons/FreshFood.svg" alt="" />
              </div>
              <div className="content">
                <h5>fastest Delelviry</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
              <span className="line"></span>
            </div>
            <div className="Feature col-lg-4 col-md-12 col-sm-12">
              <div className="icon">
                <img src="/images/home/icons/QualityFood.svg" alt="" />
              </div>
              <div className="content">
                <h5>fresh Food</h5>
                <span className="text-muted">
                  Height quality ingerdiants ensure the best taste and satation
                </span>
              </div>
            </div>
            <div className="WatermarkFood">
              <img src="/images/home/icons/foodIcon.png" alt="ssss" />
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
                <img
                  src="/images/home/Capture.PNG"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 secondBaner col-md-12">
              <div className="baner-img">
                <img
                  src="/images/home/pizaSlice.PNG"
                  className="img-fluid"
                  alt=""
                />
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
              <img src="/images/home/icons/food.png" alt="ssss" />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div class="main-title-two position-relative aos-init aos-animate">
          <h3>Our Popular Foods</h3>
          <img src="/images/title-border.png" alt="title-border" />
          <h2>Top Food Menu Selection</h2>
        </div>
        <Portfolio />
      </section>

      {/*  Start Table Reservation Section   */}
      <section class="table-reservation position-relative">
        <img
          src="/images/plate-icon-07.svg"
          className="plate-icon"
          alt="plate-icon"
        />
        <div class="container">
          <div className="row">
            <div class="order d-flex align-items-center justify-content-center flex-column">
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
