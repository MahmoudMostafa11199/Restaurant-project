import LazyLoad from 'react-lazyload';
import Swal from 'sweetalert2';

import '../../../styles/css/commentSectionStyle.css';

import Button from '../../Button';
import { comments } from '../../../data/comments';

const CommentSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Submit Success!',
      text: 'You clicked the button!',
      icon: 'success',
    });
    window.location.reload();
  };

  return (
    <div
      className="comments-section my-5"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {/* Recent Comments Section */}
      <h3 className="my-5">Recent Comments ({comments.length})</h3>
      {comments.map((comment, index) => (
        <div key={index} className="comment d-flex flex-column">
          <div className="d-flex mb-3">
            <LazyLoad height={50}>
              <img
                src={comment.avatar}
                alt="User Avatar"
                className="rounded-circle me-3"
              />
            </LazyLoad>
            <div>
              <h6 className="mb-1">{comment.author}</h6>
              <small className="text-muted">{comment.date}</small>
            </div>
          </div>
          <div>
            <p className="mt-2">{comment.text}</p>
            <a href="#post-comments">Reply</a>
          </div>
        </div>
      ))}

      {/* Post Comments Section */}
      <div className="comment-form">
        <h3 className="mb-5" id="post-comments">
          Post Comments
        </h3>
        <form id="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="What Would You Like to Discuss?"
              required
            ></textarea>
          </div>
          <Button btnType="secondary">Submit Review</Button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
