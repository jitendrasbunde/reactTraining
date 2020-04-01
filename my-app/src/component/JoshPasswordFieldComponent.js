import React ,{useState} from 'react';
import {Input, InputGroup} from 'reactstrap';
import { string, object } from 'yup'; 
let inputPassword;
const schema = object().shape({
  password: string().required()
})
export const getInputPassword =()=>{
  return inputPassword;
}
const setInputPassword =(pass)=>{
  inputPassword = pass
}

const JoshPasswordFieldComponent = (props) =>{
  const {placeholder, value} = props;

 const [inputStateValue, updateInputValue] = useState(value);
  const [showError, updateShowError] = useState(false);

  const shouldMarkError = (field) => {
    schema.isValid({
      password:inputStateValue
    }).then(function(valid) {
      updateShowError(!valid)
    })
  };
  return (
    <div>
    <InputGroup>
      <Input
        type='password'
        placeholder={placeholder}
        onChange={(event) =>{updateInputValue(event.target.value)
        shouldMarkError(inputStateValue)
        setInputPassword(inputStateValue)
        }}
        value={inputStateValue}
      />
    </InputGroup> 
    <br/>
    <span className={showError ? "error" : "d-none"}
      >invalid password</span>
    </div>
  );
};

//JoshTextFieldComponent.propTypes = {};

JoshPasswordFieldComponent.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your password',
  value: ''
};
export default JoshPasswordFieldComponent;