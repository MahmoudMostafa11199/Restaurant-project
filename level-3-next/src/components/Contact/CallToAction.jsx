import Image from 'next/image';

import ContactForm from './ContactForm';
import FramerAnimated from '@/components/FramerAnimated';

function CallToAction() {
  return (
    <section className="cta">
      <div className="container">
        <div className="row justify-content-between">
          <ContactForm />

          <div className="col-lg-5 cta__photo-box rounded order-1 order-lg-0">
            <FramerAnimated direction="left" style={{ height: '100%' }}>
              <Image
                className="cta__photo w-100 h-100"
                src="/images/contact-send-message.png"
                alt="Delicious restaurant dishes on a table with a cozy ambiance"
                width={500}
                height={600}
              />
            </FramerAnimated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
