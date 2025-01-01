import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import FramerAnimated from '@/components/FramerAnimated';

function ContactInfo() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center shadow-sm contact-info">
        <FramerAnimated direction="right">
          <div className="contact-info__item">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="contact-info__icon"
            />
            <h4 className="contact-info__title mb-3">Office Address</h4>
            <p className="contact-info__text mb-5">
              4140 Parker Rd. Allentown, New Maxico 31134
            </p>
          </div>
        </FramerAnimated>
        <FramerAnimated direction="up">
          <div className="contact-info__item">
            <FontAwesomeIcon icon={faPhone} className="contact-info__icon" />
            <h4 className="contact-info__title mb-3">Phone Number</h4>
            <p className="contact-info__text mb-0">+99 12345 67890</p>
            <p className="contact-info__text mb-5 mb-md-0">+99 12345 67890</p>
          </div>
        </FramerAnimated>
        <FramerAnimated direction="left">
          <div className="contact-info__item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-info__icon" />
            <h4 className="contact-info__title mb-3">Email Address</h4>
            <p className="contact-info__text mb-0">testing123@example.com</p>
            <p className="contact-info__text mb-0">testing321@example.com</p>
          </div>
        </FramerAnimated>
      </div>
    </div>
  );
}

export default ContactInfo;
