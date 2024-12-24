import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Button({ btnType, linkTo, styles = '', children }) {
  if (btnType === 'primary')
    return (
      <Link to="/" className="btn btn--primary">
        {children}
      </Link>
    );

  if (btnType === 'secondary' && linkTo)
    return (
      <Link
        to={linkTo}
        className={`btn btn--secondary ${styles}`}
        style={{ styles }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="btn--secondary-icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <span className="btn--secondary-text"> {children} </span>
      </Link>
    );

  if (btnType === 'secondary')
    return (
      <button
        type="submit"
        className="btn btn--secondary"
        style={{ styles }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="btn--secondary-icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <span className="btn--secondary-text"> {children} </span>
      </button>
    );
}

export default Button;
