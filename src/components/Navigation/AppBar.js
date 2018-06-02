import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as routes from '../../constants/routes';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignOutButton from '../SignOut';

const MuiAppbar = (props) =>{
  const { pathname } = props.location;
  return (
    <div className={{flexGrow: 1}}>
      <AppBar position="static" color="inherit" className="appbar">
        <Toolbar>
          <IconButton style={{marginLeft: -12, marginRight: 20}} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={{flex: 1}}>
            {pathname === "/" ? pathname + 'index' : pathname}
          </Typography>
          <Button color="inherit"><Link to={routes.LANDING}>Landing</Link></Button>
          <Button color="inherit"><Link to={routes.HOME}>Home</Link></Button>
          <Button color="inherit"><Link to={routes.ACCOUNT}>Account</Link></Button>
          <SignOutButton />
        </Toolbar>
      </AppBar>

    </div>

  );
}
export default withRouter(MuiAppbar);
