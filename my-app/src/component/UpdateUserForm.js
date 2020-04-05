import React,{useState,useReducer,useEffect}from 'react';
import {Form,Input,FormGroup,Label,Button,Card,CardBody} from 'reactstrap';
import { string, object} from 'yup'; 
import reducer from './Reducers/LoginReducer'
import { setDetails } from './Reducers/LoginAction'
import  useFetch from '../hooks /useFetch'


const initialState={
  conformPassword:"",
  email:"",
  password:"",
  emailError:"",
  passwordError:"",
  conformPasswordError:"",
  name:"",
  job:""
}

const UpdateUserForm = (props) =>{
  const {placeholder} = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [useName, setName] = useState("");
  const [job, setJob] = useState("");

  useEffect(()=>{
    console.log("Loading the page  "+isLoading)
  })


  const handleOnSubmit = (event) =>{
    event.preventDefault()
    setIsLoading(true);
    console.log("in submit");
    //debugger
    const formdata = new FormData(event.target)
    console.log(formdata)
    let schema = object().shape({
    name: string().required(),
    job: string().required()
  });
  schema
  .isValid({
      name :formdata.get("userName"),
      job :formdata.get("job")
  })
  .then(function(valid) {
    debugger
    if(valid){
      let url = "https://reqres.in/api/users/2";
      let fetchData = {
        method:"PUT",
        credentials:"same-origin",
        headers:new Headers({
          "Content-Type":"application/json"
        }),
        body:JSON.stringify({
          name:formdata.get("name") ,
          job:formdata.get("job")
        })
      }
      useFetch(url,fetchData).then(jsonResponse=>{
        console.log(jsonResponse);
        setStatus(true);
        console.log(status);
        debugger;
        
        setStatus(true);
      })
    }else{
      alert("Please give in right format")
    }
    console.log(state.email+"  "+state.password+"  "+valid);
  });
}
  if(status){
    debugger
  return <h3>User Information Updated</h3>
  }
  debugger
  return (
    <div className="container-fluid bg-dark" style={{height:669}}>
      <div className="row" style={{height:180}}></div>
      <div className="row" style={{height:200}}>
        <div className="col-4"></div>
        <div className="col-4">
          <Card>
            <CardBody>
        <Form onSubmit={handleOnSubmit} id="my-form">
        <div>
          <FormGroup>
  <Label>Update Form </Label>
            <Input
              type='text'
              name='userName'
              placeholder={placeholder}
              onChange={(event) =>{
                setName(event.target.useName)
              }}
              value={useName}
            />
          </FormGroup>
        </div>
        <br></br>
        <div>
          <FormGroup>
            <Input
              type='text'
              name='job'
              placeholder={placeholder}
              onChange={(event) =>{
                setJob(event.target.job)
              }}
              value={job}
            />
            </FormGroup> 
          <br/>
          </div>
        <center>
          <Button
          type="submit" 
          class="btn btn-secondary"
          >Update</Button>
        </center>  
      </Form>
      </CardBody>
        </Card>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};
UpdateUserForm.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password'
};
export default UpdateUserForm;

