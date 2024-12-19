import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const TableReservation = () => {
  return (
    <section className="table-reservation">
      <div className="container">
        <div className="row title text-center mb-5">
          <h2 className="fs-1 fw-bold">Table Reservation Now!</h2>
        </div>
        <div className="row mb-5 g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="time-table overflow-hidden w-100 h-100">
              <LazyLoad height={500}>
                <img
                  src="/images/about/time-table.jpg"
                  className="w-100 h-100 object-fit-fill"
                  alt="Time Table"
                />
              </LazyLoad>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12">
            <div className="row mb-4 g-3">
              <div className="col-12 col-md-6">
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
              <div className="col-12 col-md-6">
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

                  <Link
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
