import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import JoinTeam from './components/JoinTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Events />
      <Gallery />
      <JoinTeam />
      <Contact />
      <Footer />
    </div>
  );
}
