import { BrowserRouter } from "react-router-dom";
import {About, Contact, ParallaxWebsite, Project} from './components/index.js';

// import Spline from '@splinetool/react-spline';

const App = () => {

  return (
    <BrowserRouter>
    <div >
      <ParallaxWebsite/>
    </div>
    <div className="relative z-0 bg-primary">
    <Project/>
    <About />
    <Contact />
    </div>

    </BrowserRouter>
  
  )
}

export default App
