import Image from 'next/image';

import Button from '../Button';
import FramerAnimated from '../FramerAnimated';

const DiscountSection = () => {
  return (
    <section className="discount-section ">
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="col-6 col-lg-3 pe-0">
            <FramerAnimated direction="zoom">
              <div className="card card-image-left">
                <Image
                  src="/images/service/background-image-left.avif"
                  alt="Food Item 1"
                  width={700}
                  height={700}
                />
              </div>
            </FramerAnimated>
          </div>

          {/* Right Image */}
          <div className="col-6 col-lg-3 pe-0">
            <FramerAnimated direction="zoom">
              <div className="card card-image-right">
                <Image
                  src="/images/service/background-image-right.png"
                  alt="Food Item 2"
                  width={700}
                  height={700}
                />
              </div>
            </FramerAnimated>
          </div>

          {/* Discount Details */}
          <div className="col-12 col-lg-6">
            <div className="discount-details">
              <FramerAnimated direction="left">
                <p className="title">Place Your Order Online</p>
                <h3>
                  Enjoy a <span>10% Discount</span> on Your First Order
                </h3>
                <p className="description">
                  Place your meal order online today and enjoy a special 10%
                  discount on your first purchase. Don&apos;t miss out on this
                  exclusive offer! Order now to save on your delicious meal.
                </p>

                <Button btnType="secondary"> Book Table </Button>
              </FramerAnimated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
