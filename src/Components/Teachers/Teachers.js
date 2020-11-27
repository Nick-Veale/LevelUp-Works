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
import StarLogo from '../../img/starLogo2.png';
import TeacherBuildWindow from './TeacherBuildWindow';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import './TeacherDashboard.css';
import {Link, Redirect} from 'react-router-dom';
import {UserContext} from '../../userContext';
import progressTracker from '../../img/progressTracker.png';
import FaceIcon from '@material-ui/icons/Face';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import submitProj from '../../img/submitProj.png';

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

export default function Teachers() {

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

  const sideBarMaterialIcon = () => {
    if (open) {
      return {
        color: 'white',
        fontSize: '30px',
        transition: '0.3s'
      };
    } else {
      return {
        color: 'white',
        fontSize: '50px',
        marginTop: '10px',
        marginBottom: '10px',
        marginRight:'50px',
        marginLeft: '9px',
        transition: '0.3s'
      }
    }
  }

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
        marginLeft: '8px'
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
              <div>
                <Link>
                  <button className="appBarButton1">Take Screenshot</button>
                </Link>
                <Link>
                  <button className="appBarButton2">Help Center</button>
                </Link>
                <Link to="/projects">
                  <button className="appBarButton3">View Projects</button>
                </Link>
              </div>
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
          <List>
            <ListItem style={sideBarButton(0)} button onClick={() => handleSidebarClick(0)}>
              <ListItemIcon><img style={sideBarIcon()} src={progressTracker} alt="" /></ListItemIcon>
              <div id="sideBarText">Progress Tracker</div>
            </ListItem>
            <ListItem style={sideBarButton(1)} button onClick={() => handleSidebarClick(1)}>
              <ListItemIcon><FaceIcon style={sideBarMaterialIcon()} /></ListItemIcon>
              <div id="sideBarText">Student Profiles</div>
            </ListItem>
            <ListItem style={sideBarButton(2)} button onClick={() => handleSidebarClick(2)}>
              <ListItemIcon><LiveHelpIcon style={sideBarMaterialIcon()} /></ListItemIcon>
              <div id="sideBarText">Help Requests</div>
            </ListItem>
            <ListItem style={sideBarButton(3)} button onClick={() => handleSidebarClick(3)}>
              <ListItemIcon><img style={sideBarIcon()} src={submitProj} alt="" /></ListItemIcon>
              <div id="sideBarText">Project Submissions</div>
            </ListItem>
            <ListItem style={sideBarButton(4)} button onClick={() => handleSidebarClick(4)}>
              <ListItemIcon><LocalLibraryIcon style={sideBarMaterialIcon()} /></ListItemIcon>
              <div id="sideBarText">Project Library</div>
            </ListItem>
          </List>
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
              <Link to="/profile" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                <div className="sideBarLowSingleDivOpen">
                  <AccountCircleIcon id="sideBarLowIcon" style={{color: "black"}}/>
                  <h5 className="sideBarH5">Profile</h5>
                </div>
              </Link>
              <div className="sideBarLowSingleDivOpen">
                <icon>
                <Settings id="sideBarLowIcon" />
                </icon>
                <h5 className="sideBarH5">Settings</h5>
              </div>
              <div onClick={() => handleLogOut()} className="sideBarLowSingleDivOpen">
                <icon>
                <ExitToApp id="sideBarLowIcon" />
                </icon>
                <h5 className="sideBarH5">Logout</h5>
              </div>
            </div>
            <div style={hideLowerIcons()} className="sideBarLowMainDivOpen">  
              <div className="sideBarLowSingleDivClosed">
                <AccountCircleIcon id="sideBarLowIcon" />
              </div>
              <div className="sideBarLowSingleDivClosed">
                <icon>
                <Settings id="sideBarLowIcon" />
                </icon>
              </div>
              <div onClick={() => handleLogOut()} className="sideBarLowSingleDivClosed">
                <icon>
                <ExitToApp id="sideBarLowIcon" />
                </icon>
              </div>
            </div>
        </Drawer>
        <main className={classes.content}>
          <TeacherBuildWindow contentId={projectWindow} />
        </main>
      </div>
    );
  };
};
