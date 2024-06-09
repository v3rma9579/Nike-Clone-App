import './App.css';
import Topbar from '../src/components/Topbar/Topbar'
import HeroSection from './components/Hero/Hero';


function App() {
  return (
    <div className="App">
      <div className='topbar'>
        <Topbar />
      </div>
      <div className='hero'>
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
