import React, { Component } from 'react';
import { firebase } from '../../firebase';


//material
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  displayName: '',
  photoURL: '',
  error: null,
};


class UpdateDisplayName extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }



  onSubmit = (event) => {
    event.preventDefault();
    const { displayName } = this.state;

      firebase.auth.onAuthStateChanged(authUser => {

        authUser.updateProfile({


            displayName: displayName

          })
          .then(() => {
            alert('Update successful');
              this.props.onClose();
          }).catch((error) => {
            alert('Error')
          })

        })

      };


  render() {

    const {
      displayName,
      error,
    } = this.state;

    const isInvalid =
      displayName === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
              autoFocus
              value={displayName}
              onChange={event => this.setState(updateByPropertyName('displayName', event.target.value))}
              type="text"
              placeholder="Edit username"
              style={{width: '300px'}}
              /> <br /><br />


        <Button disabled={isInvalid} type="submit" variant="outlined" color="primary">
          Update
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default UpdateDisplayName;
