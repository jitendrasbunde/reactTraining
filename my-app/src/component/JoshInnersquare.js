import React  from 'react';
import {Form} from 'reactstrap';
import JoshTextFieldComponent,{getInputEmail}from './JoshTextFieldComponent';
import JoshPasswordFieldComponent,{getInputPassword} from './JoshPasswordFieldComponent'
import JoshButtonFieldComponent from './JoshButtonFieldComponent'
import JoshLabelFieldComponent from './JoshLabelFieldComponent'
import JoshLinkFieldComponent from './JoshLinkFieldComponent'
import { string, object } from 'yup'; 

const JoshLableFieldComponent = (props) =>{
  const checkValidation = (event) =>{
    event.preventDefault()
    console.log("in submit");
    let schema = object().shape({
    email: string().email().required(),
    password: string().required(),
  });schema
  .isValid({
      email :getInputEmail(),
      password :getInputPassword()
  })
  .then(function(valid) {
    console.log(valid);
  });
}
  return (
    <div className="container">
      <div className="row" style={{height:180}}></div>
      <div className="row" style={{height:200}}>
        <div className="col-4"></div>
        <div className="col-4">
        <Form onSubmit={checkValidation}>
        <JoshLabelFieldComponent/>
        <br></br>  
        <JoshTextFieldComponent />
        <br></br>
        <JoshPasswordFieldComponent/>
        <br></br>
        <JoshButtonFieldComponent/>
        <br/>
        <JoshLinkFieldComponent/>
      </Form>
        </div>
        <div className="col-4"></div>



      </div>
    </div>
  );
};

//JoshTextFieldComponent.propTypes = {};
//<input type="button" value="Click me" onclick="msg()">


export default JoshLableFieldComponent;

