import React from 'react';
import ReactDOM from 'react-dom';
import web3 from './web3';
import HealthCare from './HealthCare';

// import './patient.css';

 export default class Patient extends React.Component{
   render(){
     return(
      <div className="container container-fluid login-conatiner">

       <div className="col-md-4">
         <div className="login-form">
         <form method="post" autoComplete="off">
          <h2 className="text-center">New Record</h2>
          <div className="form-group">
          <input type="text" className="form-control" placeholder="ID"></input></div>
          <div className="form-group">

          <input type="text" className="form-control" placeholder="Name"></input></div>
          <div className="form-group">

          <input type="Date" className="form-control" placeholder="Date"></input></div>
          <div className="form-group">

          <input type="text" className="form-control" placeholder="Hospital Name"></input></div>
          <div className="form-group">

          <input type="text" className="form-control" placeholder="Price"></input></div>
          <div className="form-group">
          <button  className="btn btn-primary btn-block">Submit</button></div>
          <div className="clearfix">
          </div>
          </form>

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
