import Link from 'next/link';
import Image from 'next/image';

function PageNotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className=" col-md-6">
          <Image
            src="/images/error-404.jpg"
            alt="404 error "
            className="img-fluid"
            width={450}
            height={200}
          />
        </div>
        <div className=" col-md-6 mt-5">
          <p className="fs-3">
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
