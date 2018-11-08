import React from 'react';
//import './insurance.css';

 export default class Insurance extends React.Component{
   render(){
     return(


      <div className="col-md-12">
      <h3  className="text-center">Insurance Page</h3>
      <div className="c-list">
      <h2 className="text-center">Approved Records</h2>
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
     );
   }
 }

