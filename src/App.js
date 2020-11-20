import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Nav from './Components/Nav/Nav';
import ProjectsStudent from './Components/Projects/ProjectsStudent';
import ProjectsTeacher from './Components/Projects/ProjectsTeacher';
import Teachers from './Components/Teachers/Teachers';
import Profile from './Components/Profile/Profile';
import Students from './Components/Students/Students';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import ProjectBuilder from './Components/Projects/ProjectBuilder/ProjectBuilder';


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


class App extends React.Component{
  render() {
    return (
      <Router>
        <div>
            <Nav />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/students/projects" component={ProjectsStudent} />
                <Route exact path="/students/projectbuilder" component={ProjectBuilder} />
                <Route path="/teachers/projects" component={ProjectsTeacher} />
                <Route path="/teachers" component={Teachers} />
                <Route path="/students" component={Students} />
                <Route path="/profile" component={Profile} />
              </Switch>
        </div>  
      </Router>
    )
  }
};

export default App;