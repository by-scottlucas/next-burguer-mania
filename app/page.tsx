import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Menu from './components/Menu/Menu';

export default function Home() {
  return (
    <main className="bg-white">
      <Header/>
      <Banner />
      <Cards />
      <Menu />
      <Location />
      <Footer />
    </main>
  );
}
