import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

export default function Home() {
  return (
    <main className="bg-white">
      <Header/>
      <Banner />
      <Cards />
      <Menu />
    </main>
  );
}
