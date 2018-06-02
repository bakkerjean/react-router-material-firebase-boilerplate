import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgotLink } from '../PasswordForgot';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

//material
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SignInPage = ({ history }) =>
  <div style={{marginTop: '100px', textAlign: 'center', }}>
    <h1>SignIn</h1>
    <br />

    <SignInForm history={history} />
    <br />
    <PasswordForgotLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
              autoFocus
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email Address"
              style={{width: '300px'}}
              /> <br /><br />

        <TextField
              autoFocus
              value={password}
              onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
              type="password"
              placeholder="Password"
              style={{width: '300px'}}
              /> <br /> <br />
            <Button disabled={isInvalid} type="submit" color="primary" variant="outlined" style={{padding: '10px'}}>
          Sign In
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
