import HeaderPage from '../../components/HeaderPage';
import IconSlider from '../../components/IconSlider';
import Portfolio from '../../components/Portfolio';
import Testimonil from '../../components/Services/TestominalSection';

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
