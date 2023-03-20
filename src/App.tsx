import ReactGA from 'react-ga';
import './App.css';
import {
  About,
  Footer,
  Intro,
  Proficiency,
  Projects,
  SocialMedia,
} from './components';
import { useEffect } from 'react';

function App() {
  // for page view analytics
  const googleMeasurementId = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;

  useEffect(() => {
    ReactGA.initialize(googleMeasurementId);
    ReactGA.pageview(window.location.pathname);
    console.log(window.location.pathname);
  }, []);

  return (
    <>
      <Intro />
      <About />
      <Proficiency />
      <Projects />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
