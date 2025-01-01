import HeaderPage from '@/components/HeaderPage';
import IconSlider from '@/components/IconSlider';
import Portfolio from '@/components/Portfolio';
import Testimonil from '@/components/Services/TestominalSection';

export const metadata = {
  title: 'Menu',
  description:
    "Explore a world of flavors with Kafika's carefully crafted menu. From savory starters to indulgent desserts, we offer a wide range of dishes to satisfy every craving.",
};

function Menu() {
  return (
    <main className="menu">
      <HeaderPage title="Menu" />

      <Portfolio />

      <Testimonil />

      <IconSlider />
    </main>
  );
}

export default Menu;
