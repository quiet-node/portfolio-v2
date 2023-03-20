import './App.css';
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
