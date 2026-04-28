import Hero from '../modules/Home/sections/Hero';
import About from '../modules/Home/sections/About';
import Stack from '../modules/Home/sections/Stack';
import Projects from '../modules/Home/sections/Projects';
import Timeline from '../modules/Home/sections/Timeline';
import Contact from '../modules/Home/sections/Contact';
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