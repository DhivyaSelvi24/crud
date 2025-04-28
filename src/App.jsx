import { Button} from '@mui/material';
import UserTable from './tables/UserTables';
import ViewModal from './viewModal/viewModal';

import { useState } from 'react';
import AddUserDialog from './Modal/AddUserForm';


function App() {
  const [usersData, setUsersData] = useState([
    { id: 1, Name: "User 1", EmailId: "Useremail1@test.com"  },
    { id: 2, Name: "User 2", EmailId: "Useremail2@test.com" },
    { id: 3, Name: "User 3", EmailId: "Useremail3@test.com" }
  ])

  //modal opening
  const [open, setOpen] = useState(false);
 const[editing,setEditing]=useState(null);
 const initialformstate={id:null,Name:"",EmailId:""}
 const[currentUser,setCurrentUser]=useState(initialformstate)
 //below 2 lines are for view function
 const[viewModal,setViewModal]=useState(false);
 const[selectedUser,setSelectedUser]=useState(null);
 
 const [users, setUsers] = useState(usersData);

  //this is for adding new user while clicking add button
const addUser=async(user)=>{
  try{
    const response=await fetch("http://localhost/npx/backend/create.php",{
      method:"POST",
      mode: 'cors',
      headers:{
      "Content-Type":"application/json"
      },
    body:JSON.stringify({
      name:user.Name,
      email:user.EmailId
    }),
    });
    const result = await response.json();
    if(result.message){
      console.log("Success:",result.message)
      user.id=users.length+1
setUsers([...users,user])
setOpen(false)
    }else{
      console.error("❌ Server error:", result.error);
    }
  }
catch(err){
  console.error("❌ Fetch error:", err);
}
}
// In your addUser function, consider:

//delete user
const deleteUser=(id)=>{
setUsers(users.filter((user)=>user.id!==id))
}

//edit user
const editUserrow=(user)=>{
setEditing(true)
setCurrentUser({id:user.id, Name:user.Name, EmailId:user.EmailId})
setOpen(true)
}

const updateUsers=(id,updatedUser)=>{
setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
setEditing(null)
setOpen(false)
}

//view user
const viewUsers=(user)=>{
setSelectedUser(user);
setViewModal(true)

}

  return (

    <div className="container">
     
      <UserTable setEditing={setEditing} users={users} openModal={setOpen} deleteUser={deleteUser} editUser={editUserrow}  viewUser={viewUsers} setCurrentUser={setCurrentUser}/>
<AddUserDialog addUser={addUser} openModal={setOpen} initialopen={open} currentUser={currentUser} updatedUser={updateUsers} editing={editing}/>
   <ViewModal viewModal={viewModal} setViewModal={setViewModal} selectedUser={selectedUser} openModal={setOpen}/> 
    </div>


  );
}

export default App;
