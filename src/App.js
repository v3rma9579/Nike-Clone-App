import './App.css';
import Topbar from '../src/components/Topbar/Topbar'
import HeroSection from './components/Hero/Hero';
import Trending from './components/Trending/Trending';
import Collection from './components/Collections/Collection';
import Featured from './components/Featured/Featured';
import Spotlight from './components/Spotlight/Spotlight';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <div className='topbar'>
        <Topbar />
      </div>
      <div className='hero'>
        <HeroSection />
      </div>
      <div className='featured'>
        <Featured />
      </div>
      <div>
        <Collection />
      </div> 
      <div className='trending'>
        <Trending />
      </div>
      <div>
        <Spotlight />
      </div>
      <div>
        <Menu />
      </div>
      
    </div>
  );
}

export default App;
