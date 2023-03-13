import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Intro from './components/intro/Intro';

function App() {
  useEffect(() => {
    Aos.init({ duration: 10000 });
  }, []);
  return (
    <>
      <Intro />
    </>
  );
}

export default App;
