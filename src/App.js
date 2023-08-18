import logo from './assets/img/logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Contact/>
    </div>
  );
}

export default App;
