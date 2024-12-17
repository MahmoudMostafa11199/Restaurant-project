import HeaderPage from '../components/HeaderPage';
import MapContainer from '../components/Map';
import ContactInfo from '../components/ContactInfo';
import CallToAction from '../components/CallToAction';

function contact() {
  return (
    <main className="contact">
      <HeaderPage />

      <section className="map">
        <div
          className="text-center col-10 col-md-6 mx-auto mb-5 p-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h2 className="heading__secondary">Get In Touch</h2>
          <p className="sub__heading">
            Feel free to reach out if you need more information. We're here to
            help and to happy to provide any assistance you require.
          </p>
        </div>

        <MapContainer />

        <ContactInfo />
      </section>

      <CallToAction />
    </main>
  );
}

export default contact;
