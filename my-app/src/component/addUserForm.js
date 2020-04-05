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
  conformPasswordError:""
}

const AddUserForm = (props) =>{
  const {placeholder} = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
    email: string().email().required(),
    password: string().required()
  });
  
  if(state.password===state.conformPassword){
  schema
  .isValid({
      email :state.email,
      password :state.password
  })
  .then(function(valid) {

    if(valid){
      let url = "https://reqres.in/api/register";
      let fetchData = {
        method:"POST",
        credentials:"same-origin",
        headers:new Headers({
          "Content-Type":"application/json"
        }),
        body:JSON.stringify({
          email:formdata.get("email") ,
          password:formdata.get("password")
        })
      }
      useFetch(url,fetchData).then(jsonResponse=>{
        console.log(jsonResponse)
        setIsLoading(false);
            if(jsonResponse.token!==undefined){
              //debugger
              setToken(jsonResponse.token)     
            }else{
              //debugger
              setErrorMsg(jsonResponse.error);
            }
  
      })
     
    }else{
      alert("Please give in right format")
    }
    console.log(state.email+"  "+state.password+"  "+valid);
  });
  }else{
    alert("password and Conform Password is not Match")
  }
}
const handleOnChange = e => {
  const { value, name } = e.target;
  let updatedValues = { ...state };
  updatedValues[name] = value;
  dispatch(setDetails(updatedValues));
};

  if(tokenData!=="")
  {
    debugger
    return(
    <h3 style={{display: "grid",justifyContent:"center",alignContent:"center"}} >{tokenData}</h3>
    )
  }else if(errorMsg!==""){
    return(
      <h3 style={{display: "grid",justifyContent:"center",alignContent:"center"}} >{errorMsg}</h3>
      )
  }

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
            <Label>Registration Form</Label>
            <Input
              type='email'
              name='email'
              placeholder={placeholder}
              onChange={(event) =>{
                handleOnChange(event)
              }}
              value={state.email}
            />
          </FormGroup>
        </div>
        <br></br>
        <div>
          <FormGroup>
            <Input
              type='password'
              name='password'
              placeholder={placeholder}
              onChange={(event) =>{
                handleOnChange(event)
              }}
              value={state.password}
            />
            </FormGroup> 
          <br/>
          <FormGroup>
            <Input
              type='password'
              name='conformPassword'
              placeholder={placeholder}
              onChange={(event) =>{
                handleOnChange(event)
              }}
              value={state.conformPassword}
            />
            </FormGroup> 
          <br/>
          </div>
        <center>
          <Button
          type="submit" 
          class="btn btn-secondary"
          >Submit</Button>
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
AddUserForm.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password'
};
export default AddUserForm;

