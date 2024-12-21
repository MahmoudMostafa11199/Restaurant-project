import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import BlogSidebar from './BlogSidebar';
import { blogPosts } from '../../data/blogPosts';

export const BlogPosts = () => {
  return (
    <section className="blog-content my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="card-img position-relative">
                  <div>
                    <LazyLoad height={400} className="img">
                      <img src={post.image} alt={`blog-thumbnail-${post.id}`} />
                    </LazyLoad>
                  </div>
                  <div className="date d-flex flex-column align-items-center position-absolute">
                    <span>{post.date.day}</span>
                    <span>{post.date.month}</span>
                  </div>
                </div>

                <div className="blog-meta mt-5 mb-4 d-flex align-items-center gap-5 flex-md-row flex-column">
                  <Link to="/">{post.category}</Link>
                  <Link to={`/blog/${post.id}`} className="fs-4">
                    <FontAwesomeIcon icon={faUser} /> {post.author}
                  </Link>
                  <Link to={`/blog/${post.id}`} className="fs-4">
                    <FontAwesomeIcon icon={faComments} /> Comments(
                    {post.comments})
                  </Link>
                </div>

                <div className="card-body">
                  <h4 className="post-title">
                    <Link to={`/blog/${post.id}`} className="post-title">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="mb-4">{post.description}</p>
                  <Button btnType="secondary" linkTo={`/blog/${post.id}`}>
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};
