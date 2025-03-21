import React, { useState, useEffect } from "react";
import {
  Main,
  Project,
  Internship,  // ✅ Added Internship section
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
            <Main />
            <Internship />  {/* ✅ Added Internship section here */}
            <Project />
            <Contact />
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
