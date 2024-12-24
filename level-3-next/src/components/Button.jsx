import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Button({ btnType, linkTo, styles = '', children }) {
  console.log(styles);
  if (btnType === 'primary')
    return (
      <Link href="/" className="btn btn--primary">
        {children}
      </Link>
    );

  if (btnType === 'secondary' && linkTo)
    return (
      <Link
        href={linkTo}
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