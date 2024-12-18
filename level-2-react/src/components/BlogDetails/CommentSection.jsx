import React, { useState } from "react";
import Swal from 'sweetalert2'
import Button from '../Button';
import "./CommentSection.css";

const CommentSection = () => {
    const [comments, setComments] = useState([
        {
            author: "Joe Doe",
            avatar: "/images/blog-details/comments-1-author.png",
            date: "February 16, 2024 at 6:53 am",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            author: "Devon Lane",
            avatar: "/images/blog-details/comments-2-author.png",
            date: "February 16, 2024 at 6:53 am",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Submit Success!",
            text: "You clicked the button!",
            icon: "success"
          });
        window.location.reload();
    };

    return (
        <div className="comments-section mt-5"
            data-aos="fade-up"
            data-aos-duration="1200">
            {/* Recent Comments Section */}
            <h3 className="mb-4  ">Recent Comments ({comments.length})</h3>
            {comments.map((comment, index) => (
                <div key={index} className="comment mb-4 d-flex">
                    <img
                        src={comment.avatar}
                        alt="User Avatar"
                        className="rounded-circle me-3"
                    />
                    <div>
                        <h6 className="mb-1">{comment.author}</h6>
                        <small className="text-muted">{comment.date}</small>
                        <p className="mt-2">{comment.text}</p>
                        <a href="#">Reply</a>
                    </div>
                </div>
            ))}

            {/* Post Comments Section */}
            <h3 className="mb-4">Post Comments</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="What Would You Like to Discuss?"
                        required
                    ></textarea>
                </div>
                <Button btnType="secondary">Submit Reviewe</Button>
            </form>
        </div>
    );
};

export default CommentSection;
