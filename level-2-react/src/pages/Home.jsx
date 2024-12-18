import IconSlider from '../components/IconSlider';
import Portfolio from '../components/Portfolio';

function Home() {
  return (
    <main className="home">
      <section className="portfolio-section">
        <div class="main-title-two position-relative aos-init aos-animate">
          <h3>Our Popular Foods</h3>
          <img src="/images/title-border.png" alt="title-border" />
          <h2>Top Food Menu Selection</h2>
        </div>
        <Portfolio />
      </section>
      <IconSlider />
      <section className="baner-header position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="food-experinse col-lg-11 col-sm-12">
              <div className="hero d-flex">
                <div className="hero-Heading">
                  <div className="hero-Detalis">
                    <p className="sub-content">
                       <img src="/images/Icons/discount-vector.png" alt="Discount Icon" />
                      10% Discount For 2 Order
                    </p>
                    <h1>
                      Enjoy The Delicious <span style={{ color: '#B28E6A' }}>Food</span> Experience
                    </h1>
                    <p>
                      Indulge in the delightful culinary journey of our menu offerings, promising an
                      unforgettable experience for your taste buds.
                    </p>
                    <div className="order-Now" style={{ display: 'inline' }}>
                      <button className="primary-btn">
                        <a href="">
                          <span>
                            <i className="fa fa-angle-right" aria-hidden="true"></i> orderNow
                          </span>
                        </a>
                      </button>
                      <a href="">
                        <img src="/images/picture/play-btn-vector.png" alt="" />
                      </a>
                    </div>
                    <img src="./assets/Icons/vector-arrow.png" className="arrowVector" alt="" />
                  </div>
                </div>
                <div className="hero-baner">
                  <img src="/images/picture/plateSalate.png" alt="" />
                </div>
              </div>
              <img src="/images/Icons/dot-vector.png" alt="" className="dot-vector-one" />
              <img src="./assets/Icons/dot-large-vector.png" alt="" className="dot-vector-two" />
              <img src="./assets/Icons/dot-vector.png" alt="" className="dot-vector-three" />
              <img src="./assets/Icons/dot-large-vector.png" alt="" className="dot-vector-four" />
            </div>
            <div className="sochila col-lg-1">
              <img src="/images/Icons/sochial/facebook-icon.png" alt="" />
              <img src="/images/Icons/sochial/google-icon.png" alt="" />
              <img src="/images/Icons/sochial/instagram-icon.png" alt="" />
              <img src="/images/Icons/sochial/twitter-icon.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container MainPageSection2">
      <div className="row Features-Section">
        <div className="Feature col-lg-4 col-md-6 col-sm-12">
          <div className="icon">
            <img src="/images/Icons/FastestDilevery.svg" alt="" />
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
            <img src="/images/Icons/FreshFood.svg" alt="" />
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
            <img src="/images/Icons/QualityFood.svg" alt="" />
          </div>
          <div className="content">
            <h5>fresh Food</h5>
            <span className="text-muted">
              Height quality ingerdiants ensure the best taste and satation
            </span>
          </div>
        </div>
        <div className="WatermarkFood">
        <img src="/images/Icons/foodIcon.png" alt="ssss" />
        </div>
      </div>

      <div className="row baners-Section">
        <div className="col-lg-6 FirstBaner col-md-12">
          <div className="baner-content">
            <h5>panner bater masla</h5>
            <p>
              paneer (indian cottage cheese) cooked ina kiscious, creamy tomato-based gravy It's flavtired with aromatic apicne like garam mapala, cumin and coriander, and Finished with a touch of butter for richness and flavor
            </p>
            <a href="" className="baner-info">
              learn More <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="baner-img">
            <img src="/images/picture/Capture.PNG" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-6 secondBaner col-md-12">
          <div className="baner-img">
            <img src="/images/picture/pizaSlice.PNG" className="img-fluid" alt="" />
          </div>
          <div className="baner-content">
            <h5>panner bater masla</h5>
            <p>
              featuring tender cabbage and viorant green pass sautned with womatic apicea. This nutritious and flavorful vegetarian option im perfect for theos seeking a wholesome meal bursting with trechnens anos tiate Ergoy it as a standalone ish or pair it with your favorire pocompariments for a satisfying dining experience that will leave you craving for more
            </p>
          </div>
        </div>
        <div className="WatermarkFood">
        <img src="/images/Icons/food.png" alt="ssss" />
        </div>
      </div>
    </div>
    </main>
  );
}

export default Home;
