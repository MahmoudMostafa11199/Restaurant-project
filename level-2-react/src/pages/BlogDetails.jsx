import LazyLoad from 'react-lazyload';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments } from '@fortawesome/free-solid-svg-icons';

import CommentSection from '../components/Blog/BlogDetails/CommentSection';
import BlogIdNotFound from '../components/Blog/BlogDetails/BlogIdNotFound';
import BlogSidebar from '../components/Blog/BlogSidebar';
import HeaderPage from '../components/HeaderPage';
import Social from '../components/Social';

import { getBlog } from '../utils/blog';

function BlogDetails() {
  const { blogDetailsId } = useParams();

  const blog = getBlog(blogDetailsId);

  if (!blog) {
    return <BlogIdNotFound id={blogDetailsId} />;
  }

  return (
    <main className="blog-details-section">
      <HeaderPage title="Blog Details" />

      <div className="container">
        <div className="row">
          {/* Main Section */}
          <div className="col-lg-8 col-md-7 mb-5 px-5">
            {/* Blog Card */}
            <div className="blog-content">
              <div className="blog-card mb-4">
                <div className="card-img position-relative">
                  <div>
                    <LazyLoad height={400} className="img">
                      <img src={blog.image} alt={`blog-thumbnail-${blog.id}`} />
                    </LazyLoad>
                  </div>
                  <div className="date d-flex flex-column align-items-center position-absolute">
                    <span>{blog.date.day}</span>
                    <span>{blog.date.month}</span>
                  </div>
                </div>

                <div className="blog-meta mt-4 mb-4 d-flex align-items-center gap-5 flex-md-row flex-column">
                  <Link to="/">{blog.category}</Link>
                  <Link to={blog.link} className="fs-4">
                    <FontAwesomeIcon icon={faUser} /> {blog.author}
                  </Link>
                  <Link to={blog.link} className="fs-4">
                    <FontAwesomeIcon icon={faComments} /> Comments(
                    {blog.comments})
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod.
                </p>
                <div className="author-details">
                  <h6 className="author-quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h6>
                  <li className="author-name">Cameron Williamson</li>
                </div>
                <p className="blog-summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="popular-tags">
                  <p>
                    <span className="label tags-label me-3">Popular Tags:</span>
                    Restaurant, Café, Food
                  </p>
                </div>
                <div className="popular-tags d-flex align-items-center">
                  <span className="label tags-label me-3 mt-3">
                    Social Media:
                  </span>
                  <Social />
                </div>
              </div>

              <h4 className="global-experience-title">
                Global Visit Experience
              </h4>
              <p className="global-experience-intro">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularized in the 1960s with the release of Letterset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="global-visit-images row">
                <div className="image-container col-lg-6">
                  <LazyLoad height={350}>
                    <img
                      src="/images/global-visit-1.png"
                      alt="global-visit-1"
                      className="image w-100"
                    />
                  </LazyLoad>
                </div>
                <div className="image-container col-lg-6">
                  <LazyLoad height={350}>
                    <img
                      src="/images/global-visit-2.png"
                      alt="global-visit-2"
                      className="image w-100"
                    />
                  </LazyLoad>
                </div>
              </div>
              <p className="global-experience-summary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <ul className="key-points-list">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Integer eu dolor imperdiet, pharetra lacus sed, lacinia lorem.
                </li>
                <li>Integer a ipsum quis tortor tempor varius.</li>
                <li>Aenean volutpat nisi imperdiet fringilla lobortis.</li>
                <li>
                  Integer aliquet eros aliquet, consectetur nisi eget, tincidunt
                  ligula.
                </li>
                <li>Donec ac ex nec elit egestas finibus auctor eget arcu.</li>
                <li>Etiam sit amet ligula quis sapien dictum suscipit.</li>
              </ul>
            </div>

            {/* Blog Comments */}
            <CommentSection />
          </div>

          {/* Aside Section */}
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
