import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronRight,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

function BlogSidebar() {
  return (
    <aside className="col-lg-4 col-md-5">
      <div className="blog-sidebar">
        {/* Search Section  */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Search</h5>
            <form className="input-group position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search Here"
              />
              <button className="btn position-absolute" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>

        {/* Category Section */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">All Categories</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to="/blog" className="list-group-item-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-4 fs-4"
                  />
                  Dal Tadka
                </Link>
                <span className="badge bg-secondary rounded-pill">10</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to="/blog" className="list-group-item-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-4 fs-4"
                  />
                  Shahi Paneer
                </Link>
                <span className="badge bg-secondary rounded-pill">15</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to="/blog" className="list-group-item-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-4 fs-4"
                  />
                  Rajma Chawal
                </Link>
                <span className="badge bg-secondary rounded-pill">08</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to="/blog" className="list-group-item-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-4 fs-4"
                  />
                  Pav Bhaji
                </Link>
                <span className="badge bg-secondary rounded-pill">09</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <Link to="/blog" className="list-group-item-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-4 fs-4"
                  />
                  Paneer Tikka
                </Link>
                <span className="badge bg-secondary rounded-pill">06</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Posts Section  */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recent Posts</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center">
                <LazyLoad height={50}>
                  <img
                    src="/images/blog-details/recent-post-1.png"
                    alt="Post-Image"
                    className="rounded me-3"
                  />
                </LazyLoad>
                <div>
                  <Link
                    to="/blog/blogDetailsId:1"
                    className="list-group-item-link bolder mb-3"
                  >
                    Delicious Cuisine: Savor Our Mouthwatering Culinary
                    Creations!
                  </Link>
                  <small className="d-block text-muted">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="pe-1 me-1 border-end border-1 border-secondary"
                    />
                    20 April 2024
                  </small>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <LazyLoad height={50}>
                  <img
                    src="/images/blog-details/recent-post-2.png"
                    alt="Post-Image"
                    className="rounded me-3"
                  />
                </LazyLoad>
                <div>
                  <Link
                    to="/blog/blogDetailsId:1"
                    className="list-group-item-link bolder mb-3"
                  >
                    Delicious Cuisine: Savor Our Mouthwatering Culinary
                    Creations!
                  </Link>
                  <small className="d-block text-muted">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="pe-1 me-1 border-end border-1 border-secondary"
                    />
                    25 April 2024
                  </small>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <LazyLoad height={50}>
                  <img
                    src="/images/blog-details/recent-post-3.png"
                    alt="Post-Image"
                    className="rounded me-3"
                  />
                </LazyLoad>
                <div>
                  <Link
                    to="/blog/blogDetailsId:1"
                    className="list-group-item-link bolder mb-3"
                  >
                    Delicious Cuisine: Savor Our Mouthwatering Culinary
                    Creations!
                  </Link>
                  <small className="d-block text-muted">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="pe-1 me-1 border-end border-1 border-secondary"
                    />
                    28 April 2024
                  </small>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center">
                <LazyLoad height={50}>
                  <img
                    src="/images/blog-details/recent-post-4.png"
                    alt="Post-Image"
                    className="rounded me-3"
                  />
                </LazyLoad>
                <div>
                  <Link
                    to="/blog/blogDetailsId:1"
                    className="list-group-item-link bolder mb-3"
                  >
                    Delicious Cuisine: Savor Our Mouthwatering Culinary
                    Creations!
                  </Link>
                  <small className="d-block text-muted">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="pe-1 me-1 border-end border-1 border-secondary"
                    />
                    28 April 2024
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Tags Section  */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Product Tags</h5>
            <div className="d-flex flex-wrap pt-4">
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Restaurant
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                VegFoods
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Burger
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Pizza
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Soup
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Drink & Fruits
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Bread
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Crap
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Juice
              </Link>
              <Link
                to="/menu"
                className="btn btn-outline-secondary btn-sm me-2 mb-3"
              >
                Ice-Cream
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Section  */}
        <div className="card">
          <div className="card-body blog-contact">
            <h5 className="card-title">Contact Info</h5>
            <ul className="pt-4">
              <li className="d-flex">
                <span>Address:-</span>
                <a href="https://maps.google.com">
                  4140 Parker Rd. Allentown New Mexico 31134
                </a>
              </li>
              <li className="d-flex">
                <span>Email:-</span>
                <a href="mailto:thekafila@gmail.com">thekaflia@gmail.com</a>
              </li>
              <li className="d-flex">
                <span>Phone:-</span>
                <a href="tel:+1234567890">+12345 67890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default BlogSidebar;
