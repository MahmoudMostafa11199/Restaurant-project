import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import AppLayout from '../shared/AppLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />

          {<Route path="blog/:blogId" element={<BlogDetails />} />}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default AppRouter;
