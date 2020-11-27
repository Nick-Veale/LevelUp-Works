import React, {useContext, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarLogo from '../../../img/starLogo2.png';
import ProjectBuildWindow from './ProjectBuildWindow';
import objectivesLight from '../../../img/objectivesLight.png';
import steps from '../../../img/steps.png';
import bonus from '../../../img/bonus.png';
import newProj from '../../../img/newProj.png';
import quiz from '../../../img/quiz.png';
import submitProj from '../../../img/submitProj.png';
import videoLight from '../../../img/videoLight.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import './ProjectBuilder.css';
import {Link, Redirect} from 'react-router-dom';
import {UserContext} from '../../../userContext';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonClosed: {
    maxWidth: '60px',
    backgroundColor: '#B2E4FA',
    borderRadius: 8,
  },
  menuButtonOpen: {
    borderRadius: 8,
    backgroundColor: '#B2E4FA',
    border: '#B2E4FA',
    marginLeft: 200,
    marginRight: -8,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    border: 0
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: '#43C0F6',
    border: '0px solid #B2E4FA',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden'
  },
  drawerClose: {
    backgroundColor: '#43C0F6',
    border: '0px solid #B2E4FA',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(10) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(12) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#B2E4FA'
  },
}));

export default function MiniDrawer() {

  const { user, setUser } = useContext(UserContext);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [projectWindow, setProjectWindow] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sideBarIcon = () => {
    if (open) {
        return {
          width: '30px',
          transition: '0.3s'
        };
    } else {
        return {
          width: '50px',
          marginTop: '10px',
          marginBottom: '10px',
          marginRight:'50px',
          marginLeft: '9px',
          transition: '0.3s'
        };
    };
  };

  const sideBarButton = (id) => {
    if (id === projectWindow) {
      return {
        filter: 'invert(100%)',
          backgroundColor: '#4d1b05',
          boxShadow: '-2px 2px 5px rgb(255, 255, 255, 0.4)'
      };
    };
  };

  const showLowerIcons = () => {
    if (open === false) {
      return {display: 'none'}
     } else {
      return {
        display: 'flex',
      }
     };
  };

  const hideLowerIcons = () => {
    if (open === true) {
      return {display: 'none'}
     } else {
      return {
        display: 'inline',
        marginLeft: '26px',
        marginRight: 'auto'
      }
     };
  };

  const handleSidebarClick = (id) => {
    setProjectWindow(id);
  };

  const handleSideBarItems = () => {
    if (user.isTeacher) {
      return (
        <List>
          <ListItem style={sideBarButton(0)} button onClick={() => handleSidebarClick(0)}>
            <ListItemIcon><img style={sideBarIcon()} src={objectivesLight} alt="" /></ListItemIcon>
            <div id="sideBarText">Learning Objectives</div>
          </ListItem>
          <ListItem style={sideBarButton(1)} button onClick={() => handleSidebarClick(1)}>
            <ListItemIcon><img style={sideBarIcon()} src={steps} alt="" /></ListItemIcon>
            <div id="sideBarText">Instructions</div>
          </ListItem>
          <ListItem style={sideBarButton(2)} button onClick={() => handleSidebarClick(2)}>
            <ListItemIcon><img style={sideBarIcon()} src={videoLight} alt="" /></ListItemIcon>
            <div id="sideBarText">Video Tutorial</div>
          </ListItem>
          <ListItem style={sideBarButton(3)} button onClick={() => handleSidebarClick(3)}>
            <ListItemIcon><img style={sideBarIcon()} src={newProj} alt="" /></ListItemIcon>
            <div id="sideBarText">Preview Project</div>
          </ListItem>
          <ListItem style={sideBarButton(4)} button onClick={() => handleSidebarClick(4)}>
            <ListItemIcon><img style={sideBarIcon()} src={submitProj} alt="" /></ListItemIcon>
            <div id="sideBarText">Check Submissions</div>
          </ListItem>
          <ListItem style={sideBarButton(5)} button onClick={() => handleSidebarClick(5)}>
            <ListItemIcon><img style={sideBarIcon()} src={bonus} alt="" /></ListItemIcon>
            <div id="sideBarText">Offline Activities</div>
          </ListItem>
          <ListItem style={sideBarButton(6)} button onClick={() => handleSidebarClick(6)}>
            <ListItemIcon><img style={sideBarIcon()} src={quiz} alt="" /></ListItemIcon>
            <div id="sideBarText">View Quiz Results</div>
          </ListItem>
        </List>
      )
    } else {
      return (
        <List>
        <ListItem style={sideBarButton(0)} button onClick={() => handleSidebarClick(0)}>
          <ListItemIcon><img style={sideBarIcon()} src={objectivesLight} alt="" /></ListItemIcon>
          <div id="sideBarText">Learning Objectives</div>
        </ListItem>
        <ListItem style={sideBarButton(1)} button onClick={() => handleSidebarClick(1)}>
          <ListItemIcon><img style={sideBarIcon()} src={steps} alt="" /></ListItemIcon>
          <div id="sideBarText">Instructions</div>
        </ListItem>
        <ListItem style={sideBarButton(2)} button onClick={() => handleSidebarClick(2)}>
          <ListItemIcon><img style={sideBarIcon()} src={videoLight} alt="" /></ListItemIcon>
          <div id="sideBarText"  >Video Tutorial</div>
        </ListItem>
        <ListItem style={sideBarButton(3)} button onClick={() => handleSidebarClick(3)}>
          <ListItemIcon><img style={sideBarIcon()} src={newProj} alt="" /></ListItemIcon>
          <div id="sideBarText">Make Project</div>
        </ListItem>
        <ListItem style={sideBarButton(4)} button onClick={() => handleSidebarClick(4)}>
          <ListItemIcon><img style={sideBarIcon()} src={submitProj} alt="" /></ListItemIcon>
          <div id="sideBarText">Submit Project</div>
        </ListItem>
        <ListItem style={sideBarButton(5)} button onClick={() => handleSidebarClick(5)}>
          <ListItemIcon><img style={sideBarIcon()} src={bonus} alt="" /></ListItemIcon>
          <div id="sideBarText">Bonus Challenge</div>
        </ListItem>
        <ListItem style={sideBarButton(6)} button onClick={() => handleSidebarClick(6)}>
          <ListItemIcon><img style={sideBarIcon()} src={quiz} alt="" /></ListItemIcon>
          <div id="sideBarText">Take the Quiz</div>
        </ListItem>
    </List>
      )
    }
  };

  const conditionalButtons = () => {
    if (user.isTeacher) {
      return (
      <div>
        <Link>
          <button className="appBarButton1">Take Screenshot</button>
        </Link>
        <Link to="/teachers">
          <button className="appBarButton2">Teacher Dashboard</button>
        </Link>
        <Link to="/projects">
          <button className="appBarButton3">More Projects</button>
        </Link>
      </div>
      );
    } else {
      return (
        <div>
          <Link>
            <button className="appBarButton1">Take Screenshot</button>
          </Link>
          <Link>
            <button className="appBarButton2">Ask Teacher for Help</button>
          </Link>
          <Link to="/projects">
            <button className="appBarButton3">More Projects</button>
          </Link>
        </div>
      );
    }
  };

  const handleLogOut = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <Redirect to="/" />
    );
  } else {
    return (
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
        >
          <Toolbar style={{backgroundColor: 'white', boxShadow: '0px 0px 0px black'}}>
            <Typography variant="h6" noWrap>
              <img style={{width: '130px'}} src={StarLogo} alt="" />
            </Typography>
              <div style={{
                color: 'grey',
                fontFamily: 'nunito',
                fontWeight: '700',
                position: 'relative',
                left: '40px',
                top: '10px'}}>
                <h4 style={{
                  fontFamily: 'nunito',
                  fontWeight: '700',
                  position: 'relative',
                  margin: '0px',
                  top: '6px'
                }}>PROJECT</h4>
                <p>Introduction</p>
              </div>
              {conditionalButtons()}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          style={{backgroundColor: '#43C0F6'}}
        >
          <div className={classes.toolbar}>
            {/* Spacing for Top of SideBar */}
          </div>
          <Divider />
          <img className="sideBarPicture" src={user.profilePicture} alt="" />
          {handleSideBarItems()}
          <IconButton
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              className={clsx(classes.menuButtonOpen, {
                [classes.hide]: !open,
              })}
            >
              <ArrowLeft style={{
                color: '#F91C84',
                fontSize: '48px',
                letterSpacing: '20px'
              }} />
            </IconButton>
          <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButtonClosed, {
                [classes.hide]: open,
              })}
            >
              <ArrowRight style={{
                color: '#F91C84',
                fontSize: '48px',
                letterSpacing: '20px'
              }} />
            </IconButton>
            <div style={showLowerIcons()} className="sideBarLowMainDivOpen">  
              <div className="sideBarLowSingleDivOpen">
                <Link style={{
                  textDecoration: 'none',
                  color: 'white'
                }}to="/profile">
                <AccountCircleIcon id="sideBarLowIcon" style={{color: 'black'}} />
                  <h5 className="sideBarH5">Profile</h5>
                </Link>
              </div>
              <div className="sideBarLowSingleDivOpen">
                <icon> 
                <Settings id="sideBarLowIcon" />
                </icon>
                <h5 className="sideBarH5">Settings</h5>
              </div>
              <div className="sideBarLowSingleDivOpen" onClick={() => handleLogOut}>
                <icon>
                <ExitToApp id="sideBarLowIcon" />
                </icon>
                <h5 className="sideBarH5">Logout</h5>
              </div>
            </div>
            <div style={hideLowerIcons()} className="sideBarLowMainDivOpen">  
              <Link style={{
                textDecoration: 'none',
                color: 'black'
                }} to="/profile">
                <div className="sideBarLowSingleDivClosed">
                  <AccountCircleIcon id="sideBarLowIcon" />
                </div>
              </Link>
              <div className="sideBarLowSingleDivClosed">
                <icon>
                <Settings id="sideBarLowIcon" />
                </icon>
              </div>
                <div className="sideBarLowSingleDivClosed" onClick={() => handleLogOut()}>
                  <icon>
                  <ExitToApp id="sideBarLowIcon" />
                  </icon>
                </div>
            </div>
        </Drawer>
        <main className={classes.content}>
          <ProjectBuildWindow contentId={projectWindow} />
        </main>
      </div>
    );
  };
};
