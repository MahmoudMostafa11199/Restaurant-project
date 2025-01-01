'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Swal from 'sweetalert2';

import { fetchComments } from './commentsSlice';

import Button from '../Button';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';
import FramerAnimated from '../FramerAnimated';

const CommentSection = () => {
  const dispatch = useDispatch();
  const {
    comments,
    loading: isLoading,
    error,
  } = useSelector((store) => store.comments);

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Submit Success!',
      text: 'You clicked the button!',
      icon: 'success',
    });
    window.location.reload();
  };

  useEffect(() => {
    dispatch(fetchComments());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="comments-section my-5">
      {/* Recent Comments Section */}
      <FramerAnimated direction="up">
        <h3 className="my-5">Recent Comments ({comments.length})</h3>
      </FramerAnimated>

      {isLoading && <Spinner />}

      {error && <ErrorPage errorMessage={error} />}

      {!isLoading &&
        !error &&
        comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`comment d-flex flex-column ${
              index == comments.length - 1 ? 'border-bottom-0' : ''
            }`}
          >
            <FramerAnimated direction="up">
              <div className="d-flex mb-3">
                <Image
                  src={comment.avatar}
                  alt="User Avatar"
                  className="rounded-circle me-3"
                  width={50}
                  height={50}
                />
                <div>
                  <h6 className="mb-1">{comment.author}</h6>
                  <small className="text-muted">{comment.date}</small>
                </div>
              </div>
              <div>
                <p className="mt-2">{comment.text}</p>
                <a href="#post-comments">Reply</a>
              </div>
            </FramerAnimated>
          </div>
        ))}

      {/* Post Comments Section */}
      <div className="comment-form">
        <FramerAnimated direction="up">
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
        </FramerAnimated>
      </div>
    </div>
  );
};

export default CommentSection;
