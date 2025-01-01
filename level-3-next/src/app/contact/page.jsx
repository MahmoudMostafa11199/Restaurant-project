import HeaderPage from '@/components/HeaderPage';
import MapContainer from '@/components/Map';
import ContactInfo from '@/components/Contact/ContactInfo';
import CallToAction from '@/components/Contact/CallToAction';
import FramerAnimated from '@/components/FramerAnimated';

export const metadata = {
  title: 'Contact Us',
};

function contact() {
  return (
    <main className="contact">
      <HeaderPage title="Contact Us" />

      <section className="map">
        <div className="text-center col-10 col-md-6 mx-auto mb-5 p-5">
          <FramerAnimated direction="up">
            <h2 className="heading__secondary">Get In Touch</h2>
            <p className="sub__heading">
              Feel free to reach out if you need more information. We are here
              to help and to happy to provide any assistance you require.
            </p>
          </FramerAnimated>
        </div>

        <MapContainer />

        <ContactInfo />
      </section>

      <CallToAction />
    </main>
  );
}

export default contact;
