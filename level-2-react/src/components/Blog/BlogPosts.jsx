import React from 'react'
import { Link } from "react-router-dom";
import { faComments, faUser  } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
import img1 from "./images/blog-thumbnail-1.png"
import img2 from "./images/blog-thumbnail-2.png"
import img3 from "./images/blog-thumbnail-3.png"
import img4 from "./images/blog-thumbnail-4.png"
const blogPosts = [
    {
      id: 1,
      image: img1,
      date: { day: "20", month: "April" },
      category: "Breakfast",
      author: "Jerome Bell",
      comments: 10,
      title: "Delicious Cuisine: Savor Our Mouthwatering Culinary Creations!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident...",
      link: "../Blog Details/Blog_details.html",
    },
    {
      id: 2,
      image: img2,
      date: { day: "20", month: "April" },
      category: "Breakfast",
      author: "Jerome Bell",
      comments: 10,
      title: "Delicious Cuisine: Savor Our Mouthwatering Culinary Creations!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident...",
      link: "../Blog Details/Blog_details.html",
    },
    {
      id: 3,
      image: img3,
      date: { day: "20", month: "April" },
      category: "Breakfast",
      author: "Jerome Bell",
      comments: 10,
      title: "Delicious Cuisine: Savor Our Mouthwatering Culinary Creations!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident...",
      link: "../Blog Details/Blog_details.html",
    },
    {
      id: 4,
      image: img4,
      date: { day: "20", month: "April" },
      category: "Breakfast",
      author: "Jerome Bell",
      comments: 10,
      title: "Delicious Cuisine: Savor Our Mouthwatering Culinary Creations!",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident...",
      link: "../Blog Details/Blog_details.html",
    },
  ];

export const BlogPosts = () => {

  return (
    <section className="blog-content my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-12">
            {blogPosts.map((post) => (
              <div className="blog-card mb-5" key={post.id}>
                <div className="card-img position-relative">
                  <div className="img">
                    <img src={post.image} alt={`blog-thumbnail-${post.id}`} />
                  </div>
                  <div className="date d-flex flex-column align-items-center position-absolute">
                    <span>{post.date.day}</span>
                    <span>{post.date.month}</span>
                  </div>
                </div>

                <div className="blog-meta my-5 d-flex align-items-center gap-5 flex-md-row flex-column">
                  <button>{post.category}</button>
                  <a href="#" className="fs-4">
                  <FontAwesomeIcon icon={faUser}/> {post.author}
                  </a>
                  <a href="#" className="fs-4">
                  <FontAwesomeIcon icon={faComments} /> Comments({post.comments})
                  </a>
                </div>

                <div className="card-body">
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <Link
          to={post.link}
          className="btn-4no custom-style"
          onMouseOver={(e) => e.currentTarget.classList.add('hover-effect')}
          onMouseOut={(e) => e.currentTarget.classList.remove('hover-effect')}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#B28E6A',
              fontSize: '18px',
              zIndex: 2,
            }}
          />
          <span>Read More</span>
        </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
