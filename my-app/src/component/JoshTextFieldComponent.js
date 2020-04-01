import React ,{useState} from 'react';
import {Input, InputGroup} from 'reactstrap';
import { string, object } from 'yup'; 
let inputEmail
const schema = object().shape({
  password: string().email().required()
})
export const getInputEmail =()=>{
  return inputEmail;
}
const setInputEmail =(pass)=>{
  inputEmail = pass
}

const JoshTextFieldComponent = (props) =>{
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

JoshTextFieldComponent.getText =() =>{ return inputStateValue
}
  return (
    <div>
      <InputGroup>
        <Input
          type='text'
          name='username'
          placeholder={placeholder}
          onChange={(event) =>{updateInputValue(event.target.value)
            shouldMarkError(inputStateValue)
            setInputEmail(inputStateValue)
          }}
          value={inputStateValue}
        />
      </InputGroup>
      <br/>
      <span className={showError ? "error" : "d-none"}
        >invalid email</span>
    </div>
  );
};
//JoshTextFieldComponent.propTypes = {};

JoshTextFieldComponent.defaultProps = {
  errorMesage: null,
  placeholder: 'Please enter your email',
  value: ''
};


export default JoshTextFieldComponent;

