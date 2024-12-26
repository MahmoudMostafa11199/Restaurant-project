import HeaderPage from '../../components/HeaderPage';
import Service from '../../components/Services/Service';
import DiscountSection from '../../components/Services/DiscountSection';
import TestominalSection from '../../components/Services/TestominalSection';
import IconSlider from '../../components/IconSlider';

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
