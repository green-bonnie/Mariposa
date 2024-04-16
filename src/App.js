import logo from './MBSLogo.png';
import Header from './header';
import About from './about';
import Services from './services';
import Resources from './resources';
import Contact from './contact';
import Certs from './certs';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <About />
        <Resources />
        <Contact />
        <Services />
        <Certs />
        <Footer />
    </div>
  );
}

export default App;
