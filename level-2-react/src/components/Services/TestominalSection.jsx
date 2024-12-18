import React from "react";
import "../Services/TestominalSection.css";

const Testimonials = () => (
    <div class="testimonial-container"
        data-aos="fade-up"
        data-aos-duration="1200">
        <div class="testimonial-content">
            <h1>Testimonial</h1>
            <div class="title-line"></div>
            <h3>Restaurant Food</h3>
            <img class="quote-icon" src="/images/service/quote-icon.svg" alt="Quote" />
            <p>
                Place your meal order online today and enjoy a special 10% discount on your first

                purchase. Don't miss out on this exclusive offer! Order now to save on your delicious

                meal.
            </p>
            <span class="testimonial-author">• Brooklyn Simmons</span>
        </div>
        <div class="testimonial-image">
            <img src="/images/service/testimonial-image.jpg" alt="TestimonialImage" />
        </div>
        <div class="testimonial-navigation">
            <button class="nav-btn nav-prev">
                <img src="/images/service/privous-arrowpng.png" alt="Previous" />
            </button>
            <button class="nav-btn nav-next">
                <img src="/images/service/next-arrow.png" alt="Next" />
            </button>
        </div>
    </div>

);

export default Testimonials;
