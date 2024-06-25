import './App.css';
import Topbar from './components/Topbar/Topbar'
import HeroSection from './components/Hero/Hero';
import Trending from './components/Trending/Trending';
import Collection from './components/Collections/Collection';
import Featured from './components/Featured/Featured';
import Spotlight from './components/Spotlight/Spotlight';
import Menu from './components/Menu/Menu';
import MobileDropdown from './components/Menu/MenuMobile';
import Footer from './components/Footer/Footer';
import FooterMobile from './components/Footer/FooterMobile';

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
      <div className='collection'>
        <Collection />
      </div> 
      <div className='trending'>
        <Trending />
      </div>
      <div className='spotlight'>
        <Spotlight />
      </div>
      <div className='menu'>
        <Menu />
      </div>
      <div className='mobileMenu'>
        <MobileDropdown />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      <div className='mobileFooter'>
        <FooterMobile />
      </div>
      
    </div>
  );
}

export default App;
