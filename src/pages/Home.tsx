import Hero from '../sections/Hero';
import About from '../sections/About';
import Stack from '../sections/Stack';
import Projects from '../sections/Projects';
import Timeline from '../sections/Timeline';
import Contact from '../sections/Contact';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Stack />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}