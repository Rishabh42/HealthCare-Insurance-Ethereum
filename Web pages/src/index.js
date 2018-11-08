import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

import Patient from './patient'
import Hadmin from './hadmin'
import Labadmin from './ladmin'
import Insurance from './insurance'

import './index.css';
const FullApp = () => (
  <Router>
    <div>
      <header>
        <h1>HealthCare Insurance</h1>
      </header>
      <Route exact path="/" component={App} />
      <Route path="/patient" component={Patient} />
      <Route path="/hadmin" component={Hadmin} />
      <Route path="/labadmin" component={Labadmin} />
      <Route path="/insurance" component={Insurance} />

    </div>
  </Router>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      password:'',
      login:false
    }
  }
  render() {
    return (
      <div>
{this.state.login ? this.state.user === "rishabh" ? this.state.password === "patient"? <Redirect to="/patient" /> :  
this.state.password === "hadmin" ?<Redirect to="/hadmin" /> : 
this.state.password === "labadmin"? <Redirect to="/labadmin" />:
this.state.password === "insurance"? <Redirect to="/insurance" />:null:null:null}
        <div className="login">
          <h2>Login</h2>
          <select id="selection">
            <option selected>Select Mode..</option>
            <option>Patient</option>
            <option>Hospital Admin</option>
            <option>Lab Admin</option>
            <option>Insurance Company</option>
          </select>
          <input type="text" onChange={e => this.setState({user:e.target.value})}  placeholder="Username"></input><br />
          <input type="password" placeholder="Password" onChange={e => this.setState({password:e.target.value})}  ></input><br />
          <button className="sub" onClick={()=> this.setState({login:true})} >Submit</button><br />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<FullApp />, document.getElementById('root'));
