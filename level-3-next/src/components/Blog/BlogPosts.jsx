'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';

import { fetchPosts } from './postsSlice';

import Button from '../Button';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';
import FramerAnimated from '../FramerAnimated';

function BlogPosts() {
  const {
    posts,
    loading: isLoading,
    error,
  } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorPage errorMessage={error} />;

  return (
    <>
      {posts?.map((post) => (
        <div className="blog-card" key={post.id}>
          <FramerAnimated direction="up">
            <div className="card-img position-relative">
              <div className="img">
                <Image
                  src={post.image}
                  alt={`blog-thumbnail-${post.id}`}
                  width={700}
                  height={500}
                />
              </div>
              <div className="date d-flex flex-column align-items-center position-absolute">
                <span>{post.date.day}</span>
                <span>{post.date.month}</span>
              </div>
            </div>

            <div className="blog-meta mt-5 mb-4 d-flex align-items-center gap-3 gap-md-5 ">
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
            </div>
          </FramerAnimated>
          <FramerAnimated direction="up">
            <Button btnType="secondary" linkTo={`/blog/${post.id}`}>
              Read More
            </Button>
          </FramerAnimated>
        </div>
      ))}
    </>
  );
}

export default BlogPosts;
