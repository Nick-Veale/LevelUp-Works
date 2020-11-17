import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Teachers from './Components/Teachers/Teachers';
import Profile from './Components/Profile/Profile.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43C0F6'
    },
    secondary: {
      main: '#F91C85'
    }
  }
});


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/projects" component={Projects} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;