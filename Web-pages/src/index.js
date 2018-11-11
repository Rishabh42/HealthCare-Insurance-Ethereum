import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Patient from './patient'
import Hadmin from './hadmin'
import Labadmin from './ladmin'
import Insurance from './insurance'
import './index.css'
import HealthCare from './HealthCare'
const FullApp = () => (
  <Router>
    <div>
    <header className="App-header">
          <h1 className="App-title text-center">HealthCare Insurance</h1>
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
      <div className="container container-fluid login-conatiner">
      {this.state.login ? this.state.user === "" ? this.state.password === "patient"? <Redirect to="/patient" /> :
this.state.password === "hadmin" ?<Redirect to="/hadmin" /> :
this.state.password === "labadmin"? <Redirect to="/labadmin" />:
this.state.password === "insurance"? <Redirect to="/insurance" />:null:null:null}
<div style={{
                    maxWidth: '300px',
                    margin: '0 auto' }}>
                    <div className="login-form">
                        <form method="post">
                        <h2 className="text-center">Log in</h2>

  <div className="form-group">

          <select id="selection"  className="form-control">
            <option selected>Select Mode..</option>
            <option>Patient</option>
            <option>Hospital Admin</option>
            <option>Lab Admin</option>
            <option>Insurance Company</option>
          </select>
</div>
<div className="form-group">

          <input type="password"  className="form-control" placeholder="Password" onChange={e => this.setState({password:e.target.value})}  ></input></div>
          <div className="form-group">

          <button className="btn btn-primary btn-block" onClick={()=> this.setState({login:true})} >Submit</button></div>
          <div className="clearfix">
                            </div>
                        </form>
        </div>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<FullApp />, document.getElementById('root'));
