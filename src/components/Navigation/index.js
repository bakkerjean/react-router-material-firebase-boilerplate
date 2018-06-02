import React from 'react';

import MuiAppbar from './AppBar.js'
import MuiAppbarNonAuth from './AppbarNonAuth'

import AuthUserContext from '../Session/AuthUserContext';


import './index.css';

const Navigation = () =>

  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <MuiAppbar/>
      : <MuiAppbarNonAuth/>
    }
  </AuthUserContext.Consumer>





export default Navigation;
