import { Link } from 'react-router-dom';

function BlogIdNotFound({ id }) {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center row">
        <div className="col-md-6">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt="Invalid ID"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 mt-5">
          <h1 className="text-danger mb-3">
            Blog Details id #({id}) Not found
          </h1>
          <p className="fs-3 text-muted">
            Oops! The ID you provided does not match any records.
          </p>
          <p className="lead fs-5 text-secondary">
            Please double-check the link or go back to the main page to start
            over.
          </p>
          <Link to="/" className="btn btn--primary mt-3">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogIdNotFound;
