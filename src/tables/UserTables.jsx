import React from "react";
import { Table,Card,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,} from "@mui/material";


function UserTable(props){
  
   
return(
    <>
    
    <Card><h1>User Details</h1></Card>
<Paper>
    <TableContainer>

    <Table>
        <TableHead>
            <TableRow>
               
                <TableCell>UserName</TableCell>
                <TableCell>User Email</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody> 
       {props.users.length>0?(props.users.map((user)=>(
        <TableRow key={user.id}>
    
    <TableCell>{user.Name}</TableCell>
    <TableCell>{user.EmailId}</TableCell>
    <TableCell>
        <Button color="secondary" variant="contained" onClick={()=>props.editUser(user)}>Edit</Button>
        <Button color="error" variant="contained" onClick={()=>props.deleteUser(user.id)}>Delete</Button>
        <Button color="info" variant="contained" onClick={()=>props.viewUser(user)}>View</Button>
    </TableCell>
</TableRow>

       ))):(
<TableRow>
    <TableCell>
        No users
    </TableCell>
</TableRow>

       )}

            
        </TableBody>
    </Table>
    </TableContainer>
   
</Paper>
<Button sx={{marginLeft:9,marginTop:2}} variant="contained" onClick={()=>{props.openModal(true)
       props.setEditing(false);  // Reset editing state when adding a new user ----- editUser
       props.setCurrentUser({ id: null, Name: "", EmailId: "" }); // Reset form data
}} >Add User</Button>
</>


        )

}
export default UserTable;