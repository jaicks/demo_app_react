import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Function from "./component/Function"
import Tutorial from "./component/Tutorial";
import UserForm from './component/UserForm';
import Form_sample from './component/Form_sample';
import Form_add from './component/Form_add';
import Adding_number from './component/Adding_number';
import Reusable from './component/Reusable';
import Create_user from './component/Create_user';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // let city = "Bangalore";
  // let state = "Karnataka";
  // let name = "React is awesome"
  return (
    <div className="App">
      {/* <p>This Is My Project </p> */}
      {/* <Hello/><br/> */}
      {/* <Function city = {city}/> */}
      {/* <Tutorial state = {state}/> */}
      {/* <UserForm/> */}
      {/* <Form_sample/> */}
      {/* <Form_add/> */}
      {/* <Adding_number/> */}
      {/* <Reusable name = {name} /> */}
      <Create_user />
    </div>
  );
}

export default App;
