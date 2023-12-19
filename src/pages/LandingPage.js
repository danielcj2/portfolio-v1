import Introduction from '../components/Introduction';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumeSpacer from '../components/ResumeSpacer';
import TransitionScreen from '../components/TransitionScreen';
import { useState, useEffect } from 'react';

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <>
    {loading && <TransitionScreen />}
     <Header />
     <Introduction />
     <About />
     <Expertise />
     <ResumeSpacer />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
}

export default LandingPage
