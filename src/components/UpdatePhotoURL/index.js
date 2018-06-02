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


class UpdatePhotoURL extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }



  onSubmit = (event) => {
    event.preventDefault();

    const { photoURL } = this.state;

      firebase.auth.onAuthStateChanged(authUser => {

        authUser.updateProfile({


            photoURL: photoURL

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
      photoURL,
      error,
    } = this.state;

    const isInvalid =
              photoURL.indexOf('jpg') === -1;



    return (
      <form onSubmit={this.onSubmit}>

        <TextField
              autoFocus
              value={photoURL}
              onChange={event => this.setState(updateByPropertyName('photoURL', event.target.value))}
              type="text"
              placeholder="Avatar URL"
              style={{width: '300px'}}

            /> <br /><br />
        <Button disabled={isInvalid} type="submit" color="primary" variant="outlined">
          Update
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default UpdatePhotoURL;
