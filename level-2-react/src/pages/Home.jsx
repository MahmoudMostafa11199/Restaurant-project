import IconSlider from "../components/IconSlider";
import Portfolio from "../components/Portfolio";
import Reservation from "../components/Reservation";
import RestaurantVideo from "../components/RestaurantVideo";
import LatestArticles from "../components/LatestArticles";

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

      {/*  Start Restaurant Video Section   */}
      <RestaurantVideo />
      {/*  End Restaurant Video Section   */}

      {/*  Start Latest Articles Section   */}
      <LatestArticles />
      {/*  End Latest Articles Section   */}
    </main>
  );
}

export default Home;
