function ErrorPage({ errorMessage }) {
  return (
    <div className="text-center">
      <p className="text-danger fs-2 fw-bolder">{errorMessage}</p>
    </div>
  );
}

export default ErrorPage;
