'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments } from '@fortawesome/free-solid-svg-icons';

import { getPost } from './postsSlice';

import Social from '../Social';
import FramerAnimated from '../FramerAnimated';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';

function BlogPostDetails({ params }) {
  const postId = +params;
  const dispatch = useDispatch();
  const {
    posts,
    selectedPost,
    loading: isLoading,
    error,
  } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorPage errorMessage={error} />;

  return (
    <div className="blog-content">
      <div className="blog-card mb-4">
        <FramerAnimated direction="up">
          <div className="card-img position-relative">
            <div className="img">
              {selectedPost.image ? (
                <Image
                  src={selectedPost.image}
                  alt={`blog-thumbnail-${selectedPost.id}`}
                  width={700}
                  height={500}
                />
              ) : (
                <p>Image not available</p>
              )}
            </div>

            {selectedPost.date && (
              <div className="date d-flex flex-column align-items-center position-absolute">
                <span>{selectedPost.date.day}</span>
                <span>{selectedPost.date.month}</span>
              </div>
            )}
          </div>
        </FramerAnimated>

        <FramerAnimated direction="up">
          <div className="blog-meta mt-4 mb-4 d-flex align-items-center gap-5 flex-md-row flex-column">
            <Link href="/">{selectedPost.category}</Link>
            <Link href={`/blog/${selectedPost.id}`} className="fs-4">
              <FontAwesomeIcon icon={faUser} /> {selectedPost.author}
            </Link>
            <Link href={`/blog/${selectedPost.id}`} className="fs-4">
              <FontAwesomeIcon icon={faComments} /> Comments(
              {selectedPost.comments})
            </Link>
          </div>
        </FramerAnimated>
      </div>
      <div className="card-body">
        <FramerAnimated direction="up">
          <h4 className="blog-title">{selectedPost.title}</h4>
        </FramerAnimated>
        <FramerAnimated direction="up">
          <p className="blog-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="blog-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </FramerAnimated>
        <FramerAnimated direction="up">
          <div className="author-details">
            <h5 className="author-quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <li className="author-name">Cameron Williamson</li>
          </div>
        </FramerAnimated>
        <p className="blog-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <FramerAnimated direction="up">
          <div className="popular-tags">
            <p>
              <span className="label tags-label me-3">Popular Tags:</span>
              Restaurant, Café, Food
            </p>
          </div>
        </FramerAnimated>
        <FramerAnimated direction="up">
          <div className="popular-tags d-flex align-items-center">
            <span className="label tags-label me-3">Social Media:</span>
            <Social />
          </div>
        </FramerAnimated>
      </div>

      <FramerAnimated direction="up">
        <h4 className="global-experience-title">Global Visit Experience</h4>
      </FramerAnimated>
      <FramerAnimated direction="up">
        <p className="global-experience-intro">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letterset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </FramerAnimated>
      <div className="global-visit-images row">
        <div className="image-container mb-4 mb-lg-0 col-lg-6">
          <FramerAnimated direction="up">
            <Image
              src="/images/blog/global-visit-1.png"
              alt="global-visit-1"
              className="image w-100"
              width={400}
              height={300}
            />
          </FramerAnimated>
        </div>
        <div className="image-container col-lg-6">
          <FramerAnimated direction="up">
            <Image
              src="/images/blog/global-visit-2.png"
              alt="global-visit-2"
              className="image w-100"
              width={400}
              height={300}
            />
          </FramerAnimated>
        </div>
      </div>
      <p className="global-experience-summary">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s.
      </p>
      <ul className="key-points-list">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Integer eu dolor imperdiet, pharetra lacus sed, lacinia lorem.</li>
        <li>Integer a ipsum quis tortor tempor varius.</li>
        <li>Aenean volutpat nisi imperdiet fringilla lobortis.</li>
        <li>
          Integer aliquet eros aliquet, consectetur nisi eget, tincidunt ligula.
        </li>
        <li>Donec ac ex nec elit egestas finibus auctor eget arcu.</li>
        <li>Etiam sit amet ligula quis sapien dictum suscipit.</li>
      </ul>
    </div>
  );
}

export default BlogPostDetails;
