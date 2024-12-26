const Article = ({ tag, date, title, backgroundImage, colClass }) => {
  const articleStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={`col-md-6 ${colClass}`}>
      <div className="article article-box" style={articleStyle}>
        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
          <span className="article-tag">{tag}</span>
          <h4>{date}</h4>
        </div>
        <div className="article-title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
