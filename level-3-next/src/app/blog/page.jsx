import HeaderPage from '@/components/HeaderPage';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import BlogPosts from '@/components/Blog/BlogPosts';

export const metadata = {
  title: 'Blog',
  description:
    "Discover the latest updates, culinary tips, and behind-the-scenes stories at Kafika's Blog. Dive into a world of food inspiration, seasonal specials, and expert insights that bring our passion for cooking to life.",
};

function Blog() {
  return (
    <main>
      <HeaderPage title="Blog" />

      <section className="blog-content my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
              <BlogPosts />
            </div>

            <BlogSidebar blogDetailsId={1} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
