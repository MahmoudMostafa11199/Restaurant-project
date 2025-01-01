import FramerAnimated from '../FramerAnimated';

const Article = ({ article }) => {
  const { tag, date, title, backgroundImage } = article;

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <FramerAnimated direction="up">
        <div
          className="article-item"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="d-flex justify-content-between gap-3 mb-3">
            <span className="article-tag">{tag}</span>
            <h4 className="article-date">{date}</h4>
          </div>
          <h3 className="article-title">{title}</h3>
        </div>
      </FramerAnimated>
    </div>
  );
};

export default Article;
