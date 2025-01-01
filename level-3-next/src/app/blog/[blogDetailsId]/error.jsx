'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

function BlogIdNotFound() {
  const { blogDetailsId } = useParams();

  return (
    <div className="d-flex align-items-center justify-content-center py-5 bg-light">
      <div className="text-center py-5 row">
        <div className="col-md-6 py-5">
          <Image
            src="/images/error-404.jpg"
            alt="Invalid ID"
            className="img-fluid rounded"
            width={450}
            height={400}
          />
        </div>
        <div className="col-md-6 py-5 mt-5">
          <h1 className="text-danger mb-3">
            Blog Details id #({blogDetailsId}) Not found
          </h1>
          <p className="fs-3 text-muted">
            Oops! The ID you provided does not match any records.
          </p>
          <p className="lead fs-5 text-secondary">
            Please double-check the link or go back to the blog page.
          </p>
          <Link href="/blog" className="btn btn--primary mt-3">
            Go Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogIdNotFound;
