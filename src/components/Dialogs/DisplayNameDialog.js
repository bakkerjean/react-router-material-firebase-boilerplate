import React from 'react';

import UpdateDisplayName from '../UpdateDisplayName';
//Material
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const DisplayNameDialog = (props) => {

return (
<Dialog
    open={props.open}
    onClose={props.close}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Change display name</DialogTitle>
    <DialogContent>

      <br /><br />
      <UpdateDisplayName onClose={props.close}/>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.close} color="primary" variant="outlined">
        Cancel
      </Button>

    </DialogActions>
  </Dialog>
)
}

export default DisplayNameDialog
