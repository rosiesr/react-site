import React from 'react';
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

  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 400,
      delay: 0,
      smooth: 'linear'
    })
  }

  return (
    <div className="App">
      <Card>
        <Landing/>
        <MyNav scrollTo={scrollTo} />
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
