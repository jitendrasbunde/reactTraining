import React ,{useState} from 'react';
import {Input, InputGroup} from 'reactstrap';
import { string, object } from 'yup'; 
let inputEmail
const schema1 = object().shape({
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

  const [inputStateEmail, updateInputEmail] = useState(value);
  const [showEmailError, updateShowEmailError] = useState(false);

  const shouldEmailMarkError = (field) => {
    schema1.isValid({
      password:inputStateEmail
    }).then(function(valid) {
      updateShowEmailError(!valid)
    })
  };

  return (
    <div>
      <InputGroup>
        <Input
          type='text'
          name='username'
          placeholder={placeholder}
          onChange={(event) =>{updateInputEmail(event.target.value)
            shouldEmailMarkError(inputStateEmail)
            setInputEmail(inputEmail)
          }}
          value={inputStateEmail}
        />
      </InputGroup>
      <br/>
      <span className={showEmailError ? "error" : "d-none"}
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

