'use client';

import { useContactForm } from './useContactForm';

import Button from '../Button';
import FramerAnimated from '../FramerAnimated';

function ContactForm() {
  const formik = useContactForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="cta__form col-lg-7 rounded order-3 order-lg-0 "
    >
      <h4 className="cta__title">Send A Message</h4>
      <p className="cta__text sub__heading mb-5">
        Drop Us a Line: Feel free to send us a message with any inquiries,
        comments, or feedback. We are here and eager assist you.
      </p>
      <div className="row">
        <div className="col-12 col-sm-6 mb-4 ">
          <FramerAnimated direction="up">
            <input
              type="text"
              name="firstname"
              className={`cta__input w-100 ${
                formik.errors.firstname && formik.touched.firstname
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
              required
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <span className="invalid-feedback">
                {formik.errors.firstname}
              </span>
            )}
          </FramerAnimated>
        </div>
        <div className="col-12 col-sm-6 mb-4 ">
          <FramerAnimated direction="up">
            <input
              type="text"
              name="lastname"
              className={`cta__input w-100 ${
                formik.errors.lastname && formik.touched.lastname
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
              required
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <span className="invalid-feedback">{formik.errors.lastname}</span>
            )}
          </FramerAnimated>
        </div>
        <div className="col-12 col-sm-6 mb-4 ">
          <FramerAnimated direction="up">
            <input
              type="email"
              name="email"
              className={`cta__input w-100 ${
                formik.errors.email && formik.touched.email ? 'is-invalid' : ''
              }`}
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <span className="invalid-feedback">{formik.errors.email}</span>
            )}
          </FramerAnimated>
        </div>
        <div className="col-12 col-sm-6 mb-4 ">
          <FramerAnimated direction="up">
            <input
              type="text"
              name="companyName"
              className={`cta__input w-100 ${
                formik.errors.companyName && formik.touched.companyName
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder="Company Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
              required
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <span className="invalid-feedback">
                {formik.errors.companyName}
              </span>
            )}
          </FramerAnimated>
        </div>
        <div className="col-12 mb-5 ">
          <FramerAnimated direction="up">
            <textarea
              type="text"
              name="comment"
              className={`cta__input w-100 ${
                formik.errors.comment && formik.touched.comment
                  ? 'is-invalid'
                  : ''
              }`}
              placeholder="Comment"
              rows="5"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comment}
              required
            ></textarea>
            {formik.touched.comment && formik.errors.comment && (
              <span className="invalid-feedback">{formik.errors.comment}</span>
            )}
          </FramerAnimated>
        </div>
      </div>
      <Button btnType="secondary" type="submit">
        Book Table
      </Button>
    </form>
  );
}

export default ContactForm;
