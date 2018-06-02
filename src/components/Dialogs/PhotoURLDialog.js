import React from 'react';

import UpdatePhotoURL from '../UpdatePhotoURL';
//Material
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const photoURLDialog = (props) => {

return (

<Dialog
    open={props.open}
    onClose={props.close}
    aria-labelledby="form-dialog-title"

  >
    <DialogTitle id="form-dialog-title">Set an avatar</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Only .jpg avatar url extensions are accepted.
      </DialogContentText>
      <br /><br />
      <UpdatePhotoURL onClose={props.close}/>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.close} color="primary" variant="outlined">
        Cancel
      </Button>

    </DialogActions>
  </Dialog>
)
}

export default photoURLDialog;
