import React from 'react';
import ReactDOM from 'react-dom';
import HealthCare from './HealthCare';
import web3 from './web3';

 export default class Labadmin extends React.Component{

   constructor(props) {
super(props);
this.handleClick = this.handleClick.bind(this);
this.state = {
       records: [],
       recID: '',
       message: ''
}
}
async handleClick(event) {
event.preventDefault();
const accounts = await web3.eth.getAccounts();
await HealthCare.methods.signRecord(this.state.recID).send({from: accounts[0],  gas: 2100000});
this.setState({message: 'Record approved!'})
}

   render(){
     return(
      <div className="container container-fluid login-conatiner">
       <div className="col-md-4">
       <h3 className="text-center">Lab Admin</h3>
       <div className="login-form">
          <h4>Approve Medical Record</h4>
          <div className="form-group">
          <input type="Number"  value={this.state.recID} onChange={event => this.setState({recID: event.target.value})}className="form-control" placeholder="Input"></input></div>
          <div className="form-group">
          <button className="btn btn-primary btn-block" onClick={this.handleClick}>Approve</button></div>
          {this.state.message && <p className="alert alert-danger fade in">{this.state.message}</p>}
         </div>
         </div>
         <div className="col-md-6 col-md-offset-2">
         <div className="c-list">
         <h2 className="text-center">Records</h2>
           <table class="table table-bordered table-striped">
           <thead>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Hospital Name</th>
                <th>Price</th>
                <th>Sign Count</th>
             </tr>
             </thead>
          </table>
         </div>
         </div>
       </div>
     );
   }
 }
