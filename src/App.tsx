import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-bg-dark text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="about" className="py-20 text-center max-w-4xl mx-auto px-6">
          <h2 className="gradient-text">About Techmiya Hack</h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Techmiya Hackathon brings together the brightest minds to solve real-world problems. 
            Whether you're a seasoned developer or a curious beginner, this is your platform to 
            showcase your skills, learn from experts, and connect with fellow tech enthusiasts. 
            We provide the tools, the mentorship, and the pizza—you bring the code!
          </p>
        </div>
        <Tracks />
        <Prizes />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
