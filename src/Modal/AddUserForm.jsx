import { Button,Dialog,DialogActions,DialogContent,DialogTitle, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function AddUserDialog(props){
  //state name and name attribute should be same
    const initFormState={id:null,Name:"",EmailId:""}
    const[user,setUser]=useState(initFormState)
useEffect(()=>{
setUser(props.currentUser)

},[props.currentUser])
function handleInputChange(e){
const {name,value}=e.target
setUser({...user,[name]:value})

}
  return(
<Dialog open={props.initialopen} onClose={() => props.openModal(false)}>
<DialogTitle>User Details</DialogTitle>
<DialogContent>
<TextField label="Enter User Name" name="Name" value={user.Name} onChange={handleInputChange}></TextField>
<TextField label="Enter User E-mail Id" name="EmailId" value={user.EmailId} onChange={handleInputChange}></TextField>
</DialogContent>
<DialogActions>
    {/* <Button onClick={e=>{props.addUser(user)
       setUser(initFormState)}}>Update</Button> */}
       <Button onClick={e => {
    if (props.editing) {
        props.updatedUser(user.id, user); // Existing user update
    } else {
        props.addUser(...user); // New user add
    }
    setUser(initFormState);
}}>
    {props.editing ? "Save Changes" : "Add User"}
</Button>

    <Button onClick={()=>props.openModal(false)}>Cancel</Button>
</DialogActions>
</Dialog>
  )
}
export default AddUserDialog;