import React from "react";
import Article from "./Article";

const LatestArticles = () => {
  const articlesData = [
    {
      tag: "Breakfast",
      date: "20 April",
      title: "Delicious Cuisine: Savor Our Mouthwatering Culinary Creations!",
      backgroundImage: "/images/articles-img-1.jpg",
    },
    {
      tag: "Dessert",
      date: "25 April",
      title: "A Sweet Treat: Discover Our Decadent Dessert Recipes!",
      backgroundImage: "/images/articles-img-2.jpg",
    },
    {
      tag: "Lunch",
      date: "28 April",
      title: "Healthy Lunches: Fuel Your Day the Right Way!",
      backgroundImage: "/images/articles-img-3.jpg",
    },
    {
      tag: "Lunch",
      date: "28 April",
      title: "Quick & Tasty: Perfect Lunch Ideas for Busy Days!",
      backgroundImage: "/images/articles-img-4.jpg",
    },
    {
      tag: "Lunch",
      date: "28 April",
      title: "Gourmet Lunch: Indulge in Our Special Creations!",
      backgroundImage: "/images/articles-img-5.jpg",
    },
    {
      tag: "Breakfast",
      date: "20 April",
      title: "Start Your Morning Right with Our Tasty Breakfast Options!",
      backgroundImage: "/images/articles-img-6.jpg",
    },
  ];

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
        <div className="row gy-3 gx-4">
          {articlesData.map((article, index) => {
            // Conditionally remove col-lg-3 class for first and last article
            const colClass = (index === 0 || index === articlesData.length - 1) ? "" : "col-lg-3";

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
      </div>
    </section>
  );
};

export default LatestArticles;
