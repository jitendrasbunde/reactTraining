import React,{useState}from 'react';
import {Form,Button, Label} from 'reactstrap';
import UpdateUserForm from './UpdateUserForm'

 const ListOfUser = (props) =>{
  const [userList, setUserList] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  debugger
  if(userList){
   
    let url = "https://reqres.in/api/users";
    let users = fetch(url).then(response =>{ 
          console.log(response.json());
          return response.json()
        })
     return users;
  }else if(updateUser){
    return <UpdateUserForm/>
  }
  return (
    <div>
      <Form>
        
        <center>
          <h3><Label>Login Successfully</Label></h3>
          <Button
          onClick={()=>{
            setUpdateUser(true);
          }}
          class="btn btn-secondary"
          >Update MY Profile</Button>
          <br/>
          <Button
          onClick={()=>{
            setUserList(true);
          }}
          class="btn btn-secondary"
          >UserList</Button>
      </center>
    </Form>
    </div>
  );
};
export default ListOfUser;