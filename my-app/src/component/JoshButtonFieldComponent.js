import React  from 'react';
import {Button} from 'reactstrap';

const JoshPasswordFieldComponent = (props) =>{

  return (
    <center>
      <Button
      type="submit" 
      class="btn btn-secondary"
      >Login</Button>
    </center>  
  );
};
//JoshTextFieldComponent.propTypes = {};
//<input type="button" value="Click me" onclick="msg()">

JoshPasswordFieldComponent.defaultProps = {
  errorMesage: null,
  placeholder: null,
  value: 'Login'
};

export default JoshPasswordFieldComponent;
