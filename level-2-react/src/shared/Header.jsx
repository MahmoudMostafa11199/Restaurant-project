import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Logo from '../components/Logo';
import Social from '../components/Social';

function Header() {
  return (
    <header className="header">
      <Navbar expand="lg" className="bg-color">
        <Container fluid="xl">
          <Logo />
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse
            id="navbarNav"
            className="justify-content-evenly align-items-baseline"
          >
            <Nav className="mb-2 mb-lg-0 ms-auto">
              <Nav.Item>
                <Link className="nav-link" to="/" aria-current="page">
                  Home
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                  >
                    <path d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z" />
                  </svg>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </Nav.Item>
            </Nav>
            <Social position="social--header" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
