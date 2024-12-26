import HeaderPage from '../../components/HeaderPage';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import BlogPosts from '../../components/Blog/BlogPosts.jsx';

import { blogPosts } from './data';

function Blog() {
  return (
    <main>
      <HeaderPage title="Blog" />

      <section className="blog-content my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <BlogPosts posts={blogPosts} />
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
