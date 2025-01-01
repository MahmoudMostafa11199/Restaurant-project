import { DM_Sans, Syne } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import './_lib/fontawesome.js';
import '../styles/css/global.css';

import Header from './_shared/Header';
import Footer from './_shared/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import store from '../redux/store.js';
import { ReduxProvider } from '../redux/ReduxProvider.jsx';

// Google Font
const headingFont = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
const textFont = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
});

export const metadata = {
  title: {
    default: 'Kafika Restaurant',
    template: 'Kafika Restaurant | %s',
  },
  description:
    "Step into a world of delicious flavors and exceptional dining experiences. Our invites you to explore a curated menu of mouthwatering dishes, crafted with the freshest ingredients. Whether you're craving a cozy meal, a quick bite, or a gourmet feast, we've got something for every taste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*--------------------- ICON PAGE ---------------------*/}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body>
        <Header />

        <ReduxProvider store={store}>{children}</ReduxProvider>

        {/* children */}
        <Footer />

        {/* Button Scroll Top */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
