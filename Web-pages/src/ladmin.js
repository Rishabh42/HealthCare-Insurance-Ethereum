import React from 'react';
import './ladmin.css';

 export default class Labadmin extends React.Component{
   render(){
     return(
       <div>
          <h3>Lab Admin</h3>
         <div>
          <h4>Approve Medical Record</h4>
          <input type="Number" placeholder="Input"></input><br />
          <button className="sub">Approve</button><br />
         </div>
         <div className="tbl">
           <h2>Records</h2>
          <table>
             <tr>
                <th>ID &nbsp;&nbsp;&nbsp;</th>
                <th>Name &nbsp;&nbsp;&nbsp;</th>
                <th>Date &nbsp;&nbsp;&nbsp;</th>
                <th>Hospital Name &nbsp;&nbsp;&nbsp;</th>
                <th>Price &nbsp;&nbsp;&nbsp;</th>
                <th>Sign Count</th>
             </tr>
          </table>
         </div>
       </div>
     );
   }
 }

