import LazyLoad from 'react-lazyload';
import Button from '../Button';

export const TableReservation = () => {
  return (
    <section className="table-reservation">
      <div className="container">
        <div className="row mb-5 g-4 text-center">
          <div className="col-12 col-lg-4 align-self-end">
            <LazyLoad height={500} className="time-table overflow-hidden">
              <img
                src="/images/about/time-table.jpg"
                className="mw-100 h-auto"
                alt="Time Table"
              />
            </LazyLoad>
          </div>
          <div className="col-12 col-lg-8 h-auto">
            <div className="row text-md-start mb-5">
              <h2 className="sub__heading sub__heading--large">
                Table Reservation Now!
              </h2>
            </div>
            <div className="row mb-4 g-3">
              <div className="col-12 col-sm-6">
                <div className="menu-item">
                  <div className="overlay"></div>
                  <LazyLoad height={200}>
                    <img
                      src="/images/about/table-Reservation-slide-1.png"
                      alt="Paneer Jalfrezi"
                    />
                  </LazyLoad>
                  <h3>Paneer Jalfrezi - $20</h3>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="menu-item">
                  <div className="overlay"></div>
                  <LazyLoad height={250}>
                    <img
                      src="/images/about/table-Reservation-slide-2.png"
                      alt="Baingan Bharta"
                    />
                  </LazyLoad>
                  <h3>Baingan Bharta - $25</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="menu-item">
                  <div className="overlay"></div>
                  <LazyLoad height={250}>
                    <img
                      src="/images/about/table-Reservation-slide-3.png"
                      alt="Paneer Jalfrezi"
                    />
                  </LazyLoad>

                  {/* Button */}
                  <Button
                    btnType="secondary"
                    linkTo="/"
                    styles="position-absolute top-50 start-50 translate-middle"
                  >
                    Read More
                  </Button>
                  {/* <Link
                    to="/"
                    className="btn-4no custom-style"
                    onMouseOver={(e) =>
                      e.currentTarget.classList.add('hover-effect')
                    }
                    onMouseOut={(e) =>
                      e.currentTarget.classList.remove('hover-effect')
                    }
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#B28E6A',
                        fontSize: '18px',
                        zIndex: 2,
                      }}
                    />
                    <span>Read More</span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
