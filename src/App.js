import React, { useState, useRef, useEffect } from 'react';
import {
  Card
} from 'reactstrap';
import { Element, scroller } from 'react-scroll'
import Landing from "components/landing/landing";
import MyNav from 'components/navbar/mynav';
import About from 'components/about/about';
import Experience from 'components/experience/experience';
import Projects from 'components/projects/projects';
import Footer from 'components/footer/footer';


function App() {

  const scrollTo = (name, offset) => {
    scroller.scrollTo(name, {
      duration: 400,
      delay: 0,
      smooth: 'linear',
      offset: offset
    })
  }
  
  const landingRef = useRef();

  const [landingPos, setLandingPos] = useState(0);
  
  const handleLanding = () => {
    const position = landingRef.current.getBoundingClientRect().bottom;
    setLandingPos(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleLanding, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleLanding);
    };
  }, []);




  return (
    <div className="App">
      <Card>
        <div ref={landingRef}>
          <Element name="landing">
            <Landing scrollTo={scrollTo} />
          </Element>
        </div>
        <MyNav scrollTo={scrollTo} landingPos = {landingPos}/>
        <Element name="about">
          <About/>
        </Element>
        <Element name="experience">
          <Experience/>
        </Element>
        <Element name="projects">
          <Projects/>
        </Element>
        <Footer/>
      </Card>
    </div>
  );
}

export default App;
