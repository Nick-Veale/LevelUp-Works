import React, { useState, useMemo } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Teachers from "./Components/Teachers/Teachers";
import Profile from "./Components/Profile/Profile";
import Students from "./Components/Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectBuilder from "./Components/Projects/ProjectBuilder/ProjectBuilder";
import { UserContext } from "./userContext";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#43C0F6" },
    secondary: { main: "#F91C85" },
  },
});

export default function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <ThemeProvider theme={theme}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/projects" component={Projects} />
              <Route exact path="/projectbuilder" component={ProjectBuilder} />
              <Route path="/teachers" component={Teachers} />
              <Route path="/students" component={Students} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </ThemeProvider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
