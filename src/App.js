import './App.scss';

import TopMenubar from './Components/Includes/TopMenuBar';
import MainSlider from './Components/Includes/MainSlider';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';

import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <section className="sticky-top shadow" id="">
        <TopMenubar />
      </section>
      <section className="" id="">
        <MainSlider />
      </section>
      <section className="pt-2 pb-2 pb-md-5" id="about">
        <About />
      </section>
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="courses">
        <Courses />
      </section>
      
      <section className="pt-2 pb-2 pt-md-5 pb-md-5" id="gallery-second">
        <Gallery />
      </section>
      
      <section className="pt-2 pb-2 pt-md-5" id="contact">
        <Contact />
      </section>
      <section className="pt-2 pt-md-3" id="">
        <Footer />
      </section>
    </div>
  );
}

export default App;
