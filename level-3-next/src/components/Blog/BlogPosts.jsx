import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';

function BlogPosts({ posts }) {
  return (
    <>
      {posts?.map((post) => (
        <div className="blog-card" key={post.id}>
          <div className="card-img position-relative">
            <div>
              <div className="img">
                <Image
                  src={post.image}
                  alt={`blog-thumbnail-${post.id}`}
                  width={700}
                  height={500}
                />
              </div>
            </div>
            <div className="date d-flex flex-column align-items-center position-absolute">
              <span>{post.date.day}</span>
              <span>{post.date.month}</span>
            </div>
          </div>

          <div className="blog-meta mt-5 mb-4 d-flex align-items-center gap-5 flex-md-row flex-column">
            <Link href="/">{post.category}</Link>
            <Link href={`/blog/${post.id}`} className="fs-4">
              <FontAwesomeIcon icon={faUser} /> {post.author}
            </Link>
            <Link href={`/blog/${post.id}`} className="fs-4">
              <FontAwesomeIcon icon={faComments} /> Comments(
              {post.comments})
            </Link>
          </div>

          <div className="card-body">
            <h4 className="post-title">
              <Link href={`/blog/${post.id}`} className="post-title">
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
    </>
  );
}

export default BlogPosts;
