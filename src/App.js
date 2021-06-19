import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Portfolio from './pages/Portfolio/Portfolio';

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* <div className='app__wrapper'> */}
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/gallery' exact component={Gallery} />
            <Route path='/portfolio' exact component={Portfolio} />
          </Switch>
          <Footer />
        {/* </div> */}
      </div>
    </Router>
  );
};

export default App;
