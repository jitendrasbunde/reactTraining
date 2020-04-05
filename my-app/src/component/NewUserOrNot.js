import React,{useState}from 'react';
import {Form,Button, Label} from 'reactstrap';
import AddUserForm from './addUserForm';


const NewUserOrNot = (props) =>{
  const [newUser, setNewUser] = useState(false);
  debugger
  if(newUser){
    return <AddUserForm/>
  }

  return (
    <div>
      <Form >
        
        <center>
          <h3><Label>Information is Not Correct</Label></h3>
          <Button
          type="submit" 
          class="btn btn-secondary"
          >Login</Button>
          <br/>
          <Button
          onClick={()=>{
            setNewUser(true);
          }}
          class="btn btn-secondary"
          >NewUser</Button>
      </center>
    </Form>
    </div>
  );
};


export default NewUserOrNot;