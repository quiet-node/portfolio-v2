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

const googleMeasurementId = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;
// Initialize Google Analytics
ReactGA.initialize(googleMeasurementId);

// Function to track pageviews
const pageview = (pathname: string) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};

function App() {
  useEffect(() => {
    pageview(window.location.pathname + window.location.search);
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
