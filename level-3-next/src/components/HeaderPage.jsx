import Button from './Button';

function HeaderPage({ title }) {
  return (
    <section className="header-page text-center">
      <div className="container" data-aos="fade-up">
        <h1 className="heading__primary mb-4 mb-md-5">{title}</h1>
        <Button btnType="primary">Home / {title}</Button>
      </div>
    </section>
  );
}

export default HeaderPage;
