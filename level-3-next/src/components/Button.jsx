import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import FramerAnimated from './FramerAnimated';

function Button({ btnType, linkTo, styles = '', children }) {
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
      >
        <div className="btn--secondary-icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <span className="btn--secondary-text"> {children} </span>
      </Link>
    );

  if (btnType === 'secondary')
    return (
      <FramerAnimated direction="up">
        <button type="submit" className="btn btn--secondary" style={{ styles }}>
          <div className="btn--secondary-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <span className="btn--secondary-text">{children}</span>
        </button>
      </FramerAnimated>
    );
}

export default Button;
