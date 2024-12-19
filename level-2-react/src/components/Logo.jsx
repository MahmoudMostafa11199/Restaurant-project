import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="logo-container navbar-brand">
      <img src="/images/the-cafika-logos.png" alt="Kafika logo" />
    </Link>
  );
}

export default Logo;
