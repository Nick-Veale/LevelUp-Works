import React from 'react';
import Homepage from './Homepage';
import Nav from './Components/Nav';
import Projects from './Projects';
import Teachers from './Teachers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <Router>
        <div>
            <Nav />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/projects" component={Projects} />
                <Route path="/teachers" component={Teachers} />
              </Switch>
        </div>  
      </Router>
    )
  }
};

export default App;