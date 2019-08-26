import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Overview from './components/Overview';
import PrintPlanner from './components/printPlanner';



const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/overview" component={Overview} />
      <Route path="/printplanner/:id" component={PrintPlanner} />
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
