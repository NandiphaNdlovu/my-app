import logo from './assets/img/logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import Particles from './components/particles';

import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Particles/>
      <Contact/>
    </div>
  );
}

export default App;
