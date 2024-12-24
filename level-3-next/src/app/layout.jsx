import { DM_Sans, Syne } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './_lib/fontawesome.js';
import AosComponent from './_lib/aos-animate.js';
import '../styles/css/global.css';

import Header from './_shared/Header';
import Footer from './_shared/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Google Font
const headingFont = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const textFont = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: 'Kafika',
    template: 'Kafika | %s',
  },
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* active aos */}
        <AosComponent />

        <Header />
        {children}
        <Footer />

        {/* Button Scroll Top */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
