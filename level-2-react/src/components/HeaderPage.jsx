import Button from './Button';

function HeaderPage() {
  return (
    <section className="header-page text-center">
      <div className="container" data-aos="fade-up">
        <h1 className="heading__primary mb-4 mb-md-5">Contact Us</h1>
        <Button btnType="primary">Home / Contact Us</Button>
      </div>
    </section>
  );
}

export default HeaderPage;
