import './app.scss';
import {useState} from "react" ;
import Topbar from './Components/topbar/Topbar';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Works from './Components/works/Works';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Menu from './Components/menu/Menu';

function App() {
  const [menuOpen , setmenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        {/* <Works /> */}
        <Testimonials />
        <Contact />
      </div>
     
    </div>
  );
}

export default App;
