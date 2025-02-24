import { Button,Dialog,DialogActions,DialogContent,DialogTitle, TextField,Typography} from "@mui/material";
import { useEffect, useState } from "react";

function ViewModal(props){
    return(
        <Dialog open={props.viewModal} >
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
        {props.selectedUser ? (
          <>
            <Typography><strong>Name:</strong> {props.selectedUser.Name}</Typography>
            <Typography><strong>Email:</strong> {props.selectedUser.EmailId}</Typography>
          </>
        ) : (
          <Typography>No user selected</Typography>
        )}
        </DialogContent>
        <DialogActions>
           
        
            <Button onClick={()=>props.setViewModal(false)}>Cancel</Button>
        </DialogActions>
        </Dialog>
          )

}
export default ViewModal;