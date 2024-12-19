import Service from '../components/Service';
import HeaderPage from '../components/HeaderPage';
import IconSlider from '../components/IconSlider';
import DiscountSection from '../components/Services/DiscountSection';
import TestominalSection from '../components/Services/TestominalSection';

function Services() {
  return (
    <main className="services">
      <HeaderPage title="Services" />

      <Service />

      <DiscountSection />

      <TestominalSection />

      <IconSlider />
    </main>
  );
}

export default Services;
