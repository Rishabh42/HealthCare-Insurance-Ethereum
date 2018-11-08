import React from 'react';
//import './ladmin.css';

 export default class Labadmin extends React.Component{
   render(){
     return(
      <div className="container container-fluid login-conatiner">
       <div className="col-md-4">
       <h3 className="text-center">Lab Admin</h3>
       <div className="login-form">
          <h4>Approve Medical Record</h4>
          <div className="form-group">
          <input type="Number" className="form-control" placeholder="Input"></input></div>
          <div className="form-group">
          <button className="btn btn-primary btn-block">Approve</button></div>
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

