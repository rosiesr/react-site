import React from 'react';
import {
  Card
} from 'reactstrap';
import Landing from "components/landing/landing";
import MyNav from 'components/navbar/mynav';


function App() {
  return (
    <div className="App">
      <Card>
        <Landing/>
        <MyNav/>
      </Card>
    </div>
  );
}

export default App;
