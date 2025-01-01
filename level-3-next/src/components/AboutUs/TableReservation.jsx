import Image from 'next/image';

import Button from '../Button';
import FramerAnimated from '../FramerAnimated';

const TableReservation = () => {
  return (
    <section className="table-reservation">
      <div className="container">
        <div className="row mb-5 g-4 text-center">
          <div className="col-12 col-lg-4 align-self-end">
            <FramerAnimated direction="right">
              <div className="time-table overflow-hidden">
                <Image
                  src="/images/about/time-table.jpg"
                  className="mw-100 h-auto"
                  alt="Time Table"
                  width={500}
                  height={500}
                />
              </div>
            </FramerAnimated>
          </div>
          <div className="col-12 col-lg-8 h-auto">
            <FramerAnimated direction="up">
              <div className="text-md-start mb-5">
                <h2 className="sub__heading sub__heading--large">
                  Table Reservation Now!
                </h2>
              </div>
            </FramerAnimated>
            <div className="row mb-4 g-3">
              <div className="col-12 col-sm-6">
                <FramerAnimated direction="rotateX">
                  <div className="menu-item">
                    <div className="overlay"></div>
                    <Image
                      src="/images/about/table-Reservation-slide-1.png"
                      alt="Paneer Jalfrezi"
                      width={200}
                      height={200}
                    />
                    <h3>Paneer Jalfrezi - $20</h3>
                  </div>
                </FramerAnimated>
              </div>
              <div className="col-12 col-sm-6">
                <FramerAnimated direction="rotateX">
                  <div className="menu-item">
                    <div className="overlay"></div>
                    <Image
                      src="/images/about/table-Reservation-slide-2.png"
                      alt="Baingan Bharta"
                      width={250}
                      height={250}
                    />
                    <h3>Baingan Bharta - $25</h3>
                  </div>
                </FramerAnimated>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <FramerAnimated direction="zoom">
                  <div className="menu-item">
                    <div className="overlay"></div>
                    <Image
                      src="/images/about/table-Reservation-slide-3.png"
                      alt="Paneer Jalfrezi"
                      width={250}
                      height={250}
                    />

                    {/* Button */}
                    <Button
                      btnType="secondary"
                      linkTo="/"
                      styles="position-absolute top-50 start-50 translate-middle"
                    >
                      Read More
                    </Button>
                  </div>
                </FramerAnimated>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableReservation;
