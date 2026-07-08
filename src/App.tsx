import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Doctors from './components/Doctors';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-nunito antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Doctors />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
