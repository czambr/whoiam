import Hero from '../sections/Hero';
import About from '../sections/About';
import Stack from '../sections/Stack';
import Projects from '../sections/Projects';
import Timeline from '../sections/Timeline';
import Contact from '../sections/Contact';
import Navbar from '../shared/components/layout/Navbar';
import Footer from '../shared/components/layout/Footer';
import { CursorGlow, CursorTrail } from '../shared/components/effects/CursorParticles';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
            <CursorGlow />
            <CursorTrail />
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