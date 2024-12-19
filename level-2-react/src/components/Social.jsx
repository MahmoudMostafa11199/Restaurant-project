import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faXTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

function Social({ position }) {
  return (
    <div className={`social ${position === 'social--header' && 'ms-auto'}`}>
      <ul className={`social__list ${position === '' ? '' : position}`}>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social__link d-flex align-items-center justify-content-center"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="social__link d-flex align-items-center justify-content-center"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        {!position && (
          <>
            <li>
              <a
                href="https://x.com/?lang=en"
                target="_blank"
                className="social__link d-flex align-items-center justify-content-center"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                className="social__link d-flex align-items-center justify-content-center"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </>
        )}
        {position === 'social--header' && (
          <>
            <li>
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                className="social__link d-flex align-items-center justify-content-center"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                className="social__link d-flex align-items-center justify-content-center"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Social;
