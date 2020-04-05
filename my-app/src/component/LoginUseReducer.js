import React,{useState,useReducer,useEffect}from 'react';
import {Form,Input,FormGroup,Button,Card,CardBody} from 'reactstrap';
import JoshLabelFieldComponent from './JoshLabelFieldComponent'
import JoshLinkFieldComponent from './JoshLinkFieldComponent'
import { string, object} from 'yup'; 
import reducer from './Reducers/LoginReducer'
import { setDetails } from './Reducers/LoginAction'
import  useFetch from '../hooks /useFetch'
import NewUserOrNot from './NewUserOrNot'
import ListOfUser from './ListOfUser'
import {setUserToken} from './token/Token'

const schema2 = object().shape({
  password: string().required()
})
const schema1 = object().shape({
  email: string().email().required()
})
const initialState={
  email:"",
  password:"",
  name:"",
  job:""
}

const JoshLoginUseReducer = (props) =>{
  const {placeholder, value} = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputStatePassword, updateInputPassword] = useState(value);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPasswordError, updateShowPasswordError] = useState(false);
  const [inputStateEmail, updateInputEmail] = useState(value);
  const [showEmailError, updateShowEmailError] = useState(false);

  const shouldEmailMarkError = (field) => {
    schema1.isValid({
      email:inputStateEmail
    }).then(function(valid) {
      updateShowEmailError(!valid)
    })
  };

  useEffect(()=>{
    console.log("Loading the page  "+isLoading)
  })


  const shouldPasswoedMarkError = (field) => {
    schema2.isValid({
      password:inputStatePassword
    }).then(function(valid) {
      updateShowPasswordError(!valid)
    })
  };


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
  });schema
  .isValid({
      email :state.email,
      password :state.password
  })
  .then(function(valid) {

    if(valid){
      let url = "https://reqres.in/api/login";
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
    setUserToken(tokenData);
    return(
    <ListOfUser/>
    )
  }else if(errorMsg!==""){
    return(
      <NewUserOrNot/>
      )
  }

  return (
    <div className="container-fluid bg-dark" style={{height:669}}>
      <div className="row" style={{height:180}}></div>
      <div className="row" >
        <div className="col-4"></div>
        <div className="col-4">
        <Card>
          <CardBody>
         <Form onSubmit={handleOnSubmit} id="my-form">
        <JoshLabelFieldComponent/>
        <br></br>  
        <div>
          <FormGroup>
            <Input
              type='email'
              name='email'
              placeholder={placeholder}
              onChange={(event) =>{updateInputEmail(event.target.value)
                shouldEmailMarkError(inputStateEmail)
                handleOnChange(event)
              }}
              value={inputStateEmail}
            />
          </FormGroup>
          <br/>
          <span className={showEmailError ? "error" : "d-none"}
            >invalid email</span>
        </div>
        <br></br>
        <div>
          <FormGroup>
            <Input
              type='password'
              name='password'
              placeholder={placeholder}
              onChange={(event) =>{updateInputPassword(event.target.value)
                shouldPasswoedMarkError(inputStatePassword)
                handleOnChange(event)
              }}
              value={inputStatePassword}
            />
          </FormGroup> 
          <br/>
          <span className={showPasswordError ? "error" : "d-none"}
            >invalid password</span>
          </div>
        <br></br>
        <center>
          <Button
          type="submit" 
          class="btn btn-secondary"
          >Login</Button>
        </center>
        <br/>
        <JoshLinkFieldComponent/>
      </Form>
      </CardBody>
        </Card>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};
JoshLoginUseReducer.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password',
  value: ''
};
export default JoshLoginUseReducer;

