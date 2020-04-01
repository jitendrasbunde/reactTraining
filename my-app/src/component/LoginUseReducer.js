import React,{useState,useReducer}from 'react';
import {Form,Input,InputGroup,Button} from 'reactstrap';
import JoshLabelFieldComponent from './JoshLabelFieldComponent'
import JoshLinkFieldComponent from './JoshLinkFieldComponent'
import { string, object } from 'yup'; 
import loginReducer from './Reducers/LoginReducer'
import { setUserDetails } from './Reducers/LoginAction'

const schema2 = object().shape({
  password: string().required()
})
const schema1 = object().shape({
  email: string().email().required()
})
const initialState={
  email:"",
  password:""
}

const JoshLoginUseReducer = (props) =>{
  const {placeholder, value} = props;
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [inputStatePassword, updateInputPassword] = useState(value);
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




  const shouldPasswoedMarkError = (field) => {
    schema2.isValid({
      password:inputStatePassword
    }).then(function(valid) {
      updateShowPasswordError(!valid)
    })
  };


  const checkValidation = (event) =>{
    event.preventDefault()
    console.log("in submit");
    let schema = object().shape({
    email: string().email().required(),
    password: string().required()
  });schema
  .isValid({
      email :state.email,
      password :state.password
  })
  .then(function(valid) {
    console.log(state.email+"  "+state.password+"  "+valid);
  });
}
const handleOnChange = e => {
  const { value, name } = e.target;
  let updatedValues = { ...state };
  updatedValues[name] = value;
  dispatch(setUserDetails(updatedValues));
};

  return (
    <div className="container">
      <div className="row" style={{height:180}}></div>
      <div className="row" style={{height:200}}>
        <div className="col-4"></div>
        <div className="col-4">
        <Form onSubmit={checkValidation}>
        <JoshLabelFieldComponent/>
        <br></br>  
        <div>
          <InputGroup>
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
          </InputGroup>
          <br/>
          <span className={showEmailError ? "error" : "d-none"}
            >invalid email</span>
        </div>
        <br></br>
        <div>
          <InputGroup>
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
          </InputGroup> 
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

