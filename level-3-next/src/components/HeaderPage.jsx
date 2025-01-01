import Button from './Button';
import FramerAnimated from './FramerAnimated';

function HeaderPage({ title }) {
  return (
    <section className="header-page text-center">
      <div className="container">
        <FramerAnimated>
          <h1 className="heading__primary mb-4 mb-md-5">{title}</h1>
          <Button btnType="primary">Home / {title}</Button>
        </FramerAnimated>
      </div>
    </section>
  );
}

export default HeaderPage;
