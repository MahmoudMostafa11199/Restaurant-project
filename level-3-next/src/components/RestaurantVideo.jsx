import Link from 'next/link';
import Image from 'next/image';

import FramerAnimated from './FramerAnimated';

function RestaurantVideo() {
  return (
    <section className="video-section">
      <FramerAnimated direction="up">
        <div className="video-container">
          {/* Thumbnail */}
          <Image
            src="/images/home/video-sec-home.png"
            alt="Video Thumbnail"
            className="video-thumbnail"
            width={560}
            height={315}
          />
          {/* Custom Play Button */}
          <Link
            href="https://www.youtube.com/embed/M5_6-ZqqjK0?autoplay=1"
            className="video-play-btn"
            target="_blank"
          >
            <span>&#9658;</span> {/* Play Icon */}
          </Link>
        </div>
      </FramerAnimated>
    </section>
  );
}

export default RestaurantVideo;
