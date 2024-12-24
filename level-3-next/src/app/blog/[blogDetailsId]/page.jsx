import HeaderPage from '../../../components/HeaderPage';
import BlogSidebar from '../../../components/Blog/BlogSidebar';

function page() {
  return (
    <main className="blog-details-section">
      <HeaderPage title="Blog Details" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7 mb-5 px-5"></div>

          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}

export default page;
