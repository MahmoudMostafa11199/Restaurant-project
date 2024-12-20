// import LazyLoad from 'react-lazyload';
import Button from '../Button';
import '../../styles/css/discountSectionStyle.css';

const DiscountSection = () => {
  return (
    <section
      className="discount-section "
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-12 col-lg-3 pe-0">
            <div className="card card-image-left">
              <img
                src="/images/service/background-image-left.avif"
                alt="Food Item 1"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-lg-3 pe-0">
            <div className="card card-image-right">
              <img
                src="/images/service/background-image-right.png"
                alt="Food Item 2"
              />
            </div>
          </div>

          {/* Discount Details */}
          <div className="col-12 col-lg-6">
            <div className="discount-details">
              <p className="title">Place Your Order Online</p>
              <h3>
                Enjoy a <span>10% Discount</span> on Your First Order
              </h3>
              <p className="description">
                Place your meal order online today and enjoy a special 10%
                discount on your first purchase. Don't miss out on this
                exclusive offer! Order now to save on your delicious meal.
              </p>

              <Button btnType="secondary"> Book Table </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
