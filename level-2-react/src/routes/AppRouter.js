import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SpinnerFullPage from '../components/SpinnerFullPage';

// Pages
const AppLayout = lazy(() => import('../shared/AppLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Menu = lazy(() => import('../pages/Menu'));
const Contact = lazy(() => import('../pages/Contact'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetails = lazy(() => import('../pages/BlogDetails'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <AppLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />

            {<Route path="blog/:blogDetailsId" element={<BlogDetails />} />}

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppLayout>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
