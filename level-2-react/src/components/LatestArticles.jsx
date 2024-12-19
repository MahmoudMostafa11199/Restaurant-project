import React from 'react';

import Button from './Button';
import Article from './Article';

import { articlesData } from '../data/aticleData';

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      <div className="container">
        {/* Main Title */}
        <div className="main-title">
          <h3>Latest Article's</h3>
          <img src="/images/title-border.png" alt="title border" />
          <h2>Helpful Advice and Handy Tips</h2>
        </div>

        {/* Articles Grid */}
        <div className="row gy-3 gx-4 pb-5">
          {articlesData.map((article, index) => {
            // Conditionally remove col-lg-3 class for first and last article
            const colClass =
              index === 0 || index === articlesData.length - 1
                ? ''
                : 'col-lg-3';

            return (
              <Article
                key={index}
                tag={article.tag}
                date={article.date}
                title={article.title}
                backgroundImage={article.backgroundImage}
                colClass={colClass}
              />
            );
          })}
        </div>

        <div className="text-center mt-5">
          <Button btnType="secondary">More Article</Button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
