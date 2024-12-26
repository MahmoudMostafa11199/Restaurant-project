import Image from 'next/image';
import Button from '../Button';
import Article from './Article';

import { articlesData } from './aticleData';

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      <div className="container">
        {/* Main Title */}
        <div className="main-title mb-5">
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

        {/* Articles Grid */}
        <div className="row gy-3 gx-4 py-5">
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
