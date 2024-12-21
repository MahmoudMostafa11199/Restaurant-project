import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default AppLayout;
