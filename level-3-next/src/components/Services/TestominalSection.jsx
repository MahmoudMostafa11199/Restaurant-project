import Image from 'next/image';

const Testimonials = () => (
  <section className="testimonial">
    <div className="container">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="py-4 px-5">
            <h1>Testimonial</h1>
            <div className="title-line"></div>
            <h3>Restaurant Food</h3>
            <Image
              className="quote-icon"
              src="/images/home/icons/quote-icon.svg"
              alt="Quote"
              width={50}
              height={50}
            />
            <p>
              Place your meal order online today and enjoy a special 10%
              discount on your first purchase. Don&apos;t miss out on this
              exclusive offer! Order now to save on your delicious meal.
            </p>
            <span className="testimonial-author">• Brooklyn Simmons</span>
          </div>
        </div>

        <div className="testimonial-image">
          <Image
            src="/images/home/testimonial-slide.png"
            alt="TestimonialImage"
            width={380}
            height={380}
          />
        </div>

        <div className="testimonial-navigation">
          <button className="nav-btn nav-prev">
            <Image
              src="/images/service/privous-arrowpng.png"
              alt="Previous"
              className=""
              width={50}
              height={50}
            />
          </button>
          <button className="nav-btn nav-next">
            <Image
              src="/images/service/next-arrow.png"
              alt="Next"
              className=""
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
