import LazyLoad from 'react-lazyload';

const Testimonials = () => (
  <section className="testimonial">
    <div className="container">
      <div
        className="testimonial-container"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="testimonial-content">
          <div className="py-4 px-5">
            <h1>Testimonial</h1>
            <div className="title-line"></div>
            <h3>Restaurant Food</h3>
            <LazyLoad height={50}>
              <img
                className="quote-icon"
                src="/images/service/quote-icon.svg"
                alt="Quote"
              />
            </LazyLoad>
            <p>
              Place your meal order online today and enjoy a special 10%
              discount on your first purchase. Don't miss out on this exclusive
              offer! Order now to save on your delicious meal.
            </p>
            <span className="testimonial-author">• Brooklyn Simmons</span>
          </div>
        </div>

        <LazyLoad height={380} className="testimonial-image">
          <img
            src="/images/service/testimonial-image.jpg"
            alt="TestimonialImage"
          />
        </LazyLoad>

        <div className="testimonial-navigation">
          <button className="nav-btn nav-prev">
            <LazyLoad height={50}>
              <img src="/images/service/privous-arrowpng.png" alt="Previous" />
            </LazyLoad>
          </button>
          <button className="nav-btn nav-next">
            <LazyLoad height={50}>
              <img src="/images/service/next-arrow.png" alt="Next" />
            </LazyLoad>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
