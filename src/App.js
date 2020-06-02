import React from 'react';
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
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {

  let city = "Bangalore";
  // let state = "Karnataka";
  let name = "React is awesome"
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>Self_Pratcice.in</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Function"}>State/Props</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Tutorial"}>Add/Minus</Link>
                </li>
                <li className="nav-items" >
                  <Link className="nav-link" to={"/listdata"} >ListData</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Userform"}>Userform</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/formsample"}>Form_Show</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/formadd"}>Form Add</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/addnumber"}>Add Number</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/createuser"}>Create User </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/reuse"}>Resusable</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route exact path="/listdata" component={Hello} />
              {/* <Hello/><br/> */}
              {/* <Function city = {city}/> */}
              <Route path="/Function" component={Function} />
              {/* <Tutorial state = {state}/> */}
              <Route path="/Tutorial" component={Tutorial} />
              {/* <UserForm/> */}
              <Route path="/Userform" component={UserForm} />
              {/* <Form_sample/> */}
              <Route path="/formsample" component={Form_sample} />
              {/* <Form_add/> */}
              <Route path="/formadd" component={Form_add} />
              {/* <Adding_number/> */}
              <Route path="/addnumber" component={Adding_number} />
              {/* <Reusable name = {name} /> */}
              {/* <Route path='/reuse' component={Resusable} /> */}
              {/* <Create_user /> */}
              <Route path="/createuser" component={Create_user} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
