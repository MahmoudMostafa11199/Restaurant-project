'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FramerAnimated from '../FramerAnimated';
import Article from './Article';
import { fetchArticles } from './articlesSlice';
import Button from '../Button';
import Spinner from '../Spinner';
import ErrorPage from '../ErrorPage';

const LatestArticles = () => {
  const dispatch = useDispatch();
  const {
    articles,
    loading: isLoading,
    error,
  } = useSelector((store) => store.articles);

  useEffect(() => {
    dispatch(fetchArticles());

    // eslint-disable-next-line
  }, []);

  return (
    <section className="article">
      <div className="container">
        {/* Main Title */}
        <FramerAnimated direction="zoom">
          <div className="text-center mb-5">
            <h3 className="heading__secondary heading__secondary--small">
              Latest Article&apos;s
            </h3>
            <Image
              src="/images/home/title-border.png"
              alt="title border"
              width={250}
              height={10}
            />
            <h2 className="sub__heading sub__heading--large">
              Helpful Advice and Handy Tips
            </h2>
          </div>
        </FramerAnimated>

        {/* Articles Grid */}
        {isLoading && <Spinner />}

        {error && <ErrorPage errorMessage={error} />}

        {!isLoading && !error && (
          <>
            <div className="row gy-3 gx-4 py-5">
              {articles.map((article) => {
                return <Article key={article.id} article={article} />;
              })}
            </div>

            <div className="text-center mt-5">
              <Button btnType="secondary">More Article</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LatestArticles;
