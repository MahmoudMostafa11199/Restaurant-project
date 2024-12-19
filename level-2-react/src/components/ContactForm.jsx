import Button from './Button';

function ContactForm() {
  return (
    <form
      className="cta__form col-lg-7 rounded order-3 order-lg-0 "
      data-aos="fade-up-right"
    >
      <h4 className="cta__title">Send A Message</h4>
      <p className="cta__text sub__heading mb-5">
        Drop Us a Line: Feel free to send us a message with any inquiries,
        comments, or feedback. We're here and eager assist you.
      </p>
      <div className="row" data-aos="fade-up">
        <div className="col-12 col-sm-6 mb-4 ">
          <input
            type="text"
            className="cta__input w-100"
            placeholder="First Name"
            required
          />
        </div>
        <div className="col-12 col-sm-6 mb-4 ">
          <input
            type="text"
            className="cta__input w-100"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="col-12 col-sm-6 mb-4 ">
          <input
            type="email"
            className="cta__input w-100"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="col-12 col-sm-6 mb-4 ">
          <input
            type="text"
            className="cta__input w-100"
            placeholder="Company Name"
            required
          />
        </div>
        <div className="col-12 mb-5 ">
          <textarea
            type="text"
            className="cta__input w-100"
            placeholder="Comment"
            rows="5"
            required
          ></textarea>
        </div>
      </div>
      <Button btnType="secondary">Book Table</Button>
    </form>
  );
}

export default ContactForm;
