function Map() {
  return (
    <div className="map__container mt-5">
      <div className="map__overlay">
        <iframe
          title="Google Map of 1 Grafton Street, Dublin, Ireland"
          scrolling="no"
          loading="lazy"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
