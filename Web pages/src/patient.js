import React from 'react';
import ReactDOM from 'react-dom';
import './patient.css';

 class Patient extends React.Component{
   render(){
     return(
       <div>
          <header>
             <h1>HealthCare Insurance</h1>
          </header>
         <div className="login">
          <h2>New Record</h2>
          <input type="text" placeholder="ID"></input><br />
          <input type="text" placeholder="Name"></input><br />
          <input type="Date" placeholder="Date"></input><br />
          <input type="text" placeholder="Hospital Name"></input><br />
          <input type="text" placeholder="Price"></input><br />
          <button className="sub">Submit</button><br />
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

ReactDOM.render(<Patient />, document.getElementById('root'));
