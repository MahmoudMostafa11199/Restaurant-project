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
    </main>
  );
}

export default Home;
