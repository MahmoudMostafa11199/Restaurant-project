import HeaderPage from '@/components/HeaderPage';
import Service from '@/components/Services/Service';
import DiscountSection from '@/components/Services/DiscountSection';
import TestominalSection from '@/components/Services/TestominalSection';
import IconSlider from '@/components/IconSlider';

export const metadata = {
  title: 'Services',
  description:
    "At Kafika, we go beyond serving delicious meals to provide you with exceptional services that enhance your dining experience. Whether you're dining in, ordering takeout, or planning a special event, we've got you covered.",
};

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
