import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Works, StarsCanvas, ParallaxWebsite, Project} from './components/index.js';

import Spline from '@splinetool/react-spline';

const App = () => {

  return (
    <BrowserRouter>
    <div >
      <ParallaxWebsite/>
    </div>
    <div className="relative z-0 bg-primary">
    <Project/>
    <About />
    <Works />

    {/* <Experience />
    <Tech />
    <Feedbacks /> */}
    <Contact />
    </div>

    </BrowserRouter>
  
  )
}

export default App
