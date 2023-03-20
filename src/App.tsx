import './App.css';
import ReactGA from 'react-ga';
import {
  About,
  Footer,
  Intro,
  Proficiency,
  Projects,
  SocialMedia,
} from './components';

function App() {
  // for page view analytics
  const googleMeasurementId = import.meta.env.VITE_GOOGLE_MEASUREMENT_ID;
  ReactGA.initialize(googleMeasurementId);
  ReactGA.pageview(window.location.pathname + window.location.search);

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
