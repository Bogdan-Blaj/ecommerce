import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';


const ComponentA = props => {
  return (
    <div>
        <h1> Data Receive from props matches link : {props.match.params.topicId }</h1>
    </div>
  );
}

function App() {
  return (
    
    <div>
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path ='/componentA/:topicId' component={ComponentA} />
      </Switch>
    </div>
  );
}

export default App;
