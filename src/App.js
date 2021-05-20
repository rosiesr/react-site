import React from 'react';
import {
  Card
} from 'reactstrap';
import Landing from "components/landing/landing";
import MyNav from 'components/navbar/mynav';
import About from 'components/about/about';
import Experience from 'components/experience/experience';
import Projects from 'components/projects/projects';


function App() {
  return (
    <div className="App">
      <Card>
        <Landing/>
        <MyNav/>
        <About/>
        <Experience/>
        <Projects/>
      </Card>
    </div>
  );
}

export default App;
