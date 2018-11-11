import React from 'react';
import web3 from './web3';
import HealthCare from './HealthCare';
//import './ladmin.css';

 export default class Hadmin extends React.Component{
  /* state = {
     hospitalSign: '',
   };

   async componentDidMount(){
    const hospitalAdmin = await HealthCare.methods.hospitalAdmin().call();

    this.setState({hospitalAdmin});
   }

   onSubmit = async (event) => {
     event.preventDefault();



   }; */


   render(){
     return(

      <div className="container container-fluid login-conatiner">
      <div className="col-md-4">
      <h3 className="text-center">Hospital Admin</h3>
      <div className="login-form">
         <h4 className="text-center">Approve Medical Record</h4>
         <div className="form-group">
          <input type="Number" className="form-control" placeholder="Input"></input><br />
          </div>
          <div className="form-group">
          <button className="btn btn-primary btn-block">Approve</button>
          </div>
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
