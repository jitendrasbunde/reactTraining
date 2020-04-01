import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import App from './App';
import './index.css';

//import * as serviceWorker from './serviceWorker';
/*
import JoshTextFieldComponent from './component/JoshTextFieldComponent';
import JoshPasswordFieldComponent from './component/JoshPasswordFieldComponent'
import JoshButtonFieldComponent from './component/JoshButtonFieldComponent'
import JoshLabelFieldComponent from './component/JoshLabelFieldComponent'
import JoshLinkFieldComponent from './component/JoshLinkFieldComponent'
*/
//import JoshInnersquare from './component/JoshInnersquare'
//import LoginExample from './component/LoginExample'
import Login from './component/LoginUseReducer'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      <Login/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();
