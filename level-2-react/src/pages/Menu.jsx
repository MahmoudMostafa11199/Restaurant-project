import Portfolio from '../components/Portfolio';
import IconSlider from '../components/IconSlider';
import HeaderPage from '../components/HeaderPage';
import Testimonal from '../components/Services/TestominalSection';

function Menu() {
  return (
    <main className="menu">
      <HeaderPage title="Our Menu" />
      <Portfolio />
      <Testimonal />
      <IconSlider />
    </main>
  );
}

export default Menu;
