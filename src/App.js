import logo from './assets/img/logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import Particles from './components/Particles';

import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className='dark:bg-content dark:text-bkg'>
      <div className="App">
      <Particles/>
      <NavBar />
      <Banner/>
      <Contact/>
      {/*<Footer/>*/}
    </div>
    </div>
  );
}

export default App;
