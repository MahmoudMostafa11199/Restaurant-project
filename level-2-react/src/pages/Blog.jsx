import HeaderPage from '../components/HeaderPage';
import { BlogPosts } from '../components/Blog/BlogPosts';

function Blog() {
  return (
    <main className="blog">
      <HeaderPage title="Blog" />
      <BlogPosts />
    </main>
  );
}

export default Blog;
