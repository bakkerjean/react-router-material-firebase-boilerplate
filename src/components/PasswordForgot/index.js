import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

//Material
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const PasswordForgotPage = () =>
  <div style={{marginTop: '100px', textAlign: 'center', }}>
    <h1>PasswordForgot</h1>
    <br /><br />
    <PasswordForgotForm />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgotForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
              autoFocus
              value={this.state.email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
              type="text"
              placeholder="Email Address"
              style={{width: '300px'}}
              /> <br /><br />

            <Button disabled={isInvalid} type="submit" color="primary" variant="outlined">
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgotLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgotPage;

export {
  PasswordForgotForm,
  PasswordForgotLink,
};
