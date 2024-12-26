'use client';
import { useState } from 'react';

function RestaurantVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      <div className="video-container">
        {!isPlaying ? (
          <div className="video-thumbnail" onClick={playVideo}>
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.youtube.com/vi/M5_6-ZqqjK0/maxresdefault.jpg"
              alt="Video Thumbnail"
            />
            {/* Custom Play Button */}
            <div className="custom-play-button">
              <span>&#9658;</span> {/* Play Icon */}
            </div>
          </div>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/M5_6-ZqqjK0?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}

export default RestaurantVideo;
