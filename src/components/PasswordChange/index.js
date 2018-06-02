import React, { Component } from 'react';

import { auth } from '../../firebase';

//material
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        alert('Success!')
        this.props.onClose();
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
              autoFocus
              value={passwordOne}
              onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
              type="password"
              placeholder="New Password"
              style={{width: '300px'}}

            /> <br /><br />
            <TextField
                value={passwordTwo}
                onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm New Password"
                style={{width: '300px'}}

                />
              <br /><br />

      <Button disabled={isInvalid} type="submit" color="primary" variant="outlined">
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;
