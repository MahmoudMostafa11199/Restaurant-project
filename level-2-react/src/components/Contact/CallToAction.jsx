import ContactForm from './ContactForm';

function CallToAction() {
  return (
    <section className="cta">
      <div className="container">
        <div className="row justify-content-between">
          <ContactForm />

          <div className="col-lg-5 cta__photo-box rounded order-1 order-lg-0">
            <img
              className="cta__photo w-100 h-100"
              data-aos="fade-left"
              src="/images/contact-send-message.png"
              alt="Delicious restaurant dishes on a table with a cozy ambiance"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
