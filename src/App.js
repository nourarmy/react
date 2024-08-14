


import Home from './components/Home';
import AboutUs from './components/AboutUs';
import './App.css';
import Services from './components/Services';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Team from './components/Team';
import Event from './components/Event';

import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Services />
      <Event />
      <Team/>
      <div className='app-bg'>
            
            <Footer /> 
          </div>
    </div>
  );
}

export default App;
