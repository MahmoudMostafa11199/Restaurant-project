import BlogSidebar from '@/components/Blog/BlogSidebar';
import CommentSection from '@/components/Blog/CommentSection';
import BlogPostDetails from '@/components/Blog/BlogPostDetails';
import HeaderPage from '@/components/HeaderPage';

// Title Page
export async function generateMetadata({ params }) {
  const { blogDetailsId } = params;

  return {
    title: blogDetailsId ? `Blog Details #${blogDetailsId}` : 'Blog Details',
    description:
      'Discover insightful articles on a variety of topics that matter to you. Our blog features expert opinions, tips, and updates designed to keep you informed and engaged. Explore a range of subjects from the latest trends to timeless advice, all crafted to provide valuable knowledge and inspiration.',
  };
}

function BlogDetails({ params }) {
  const { blogDetailsId } = params;

  return (
    <main className="blog-details-section">
      <HeaderPage title="Blog Details" />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8 mb-5 px-5">
            {/* Blog Card */}
            <BlogPostDetails params={blogDetailsId} />

            {/* Blog Comments */}
            <CommentSection />
          </div>

          <BlogSidebar blogDetailsId={blogDetailsId} />
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
