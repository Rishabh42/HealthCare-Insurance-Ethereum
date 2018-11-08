import React from 'react';
import ReactDOM from 'react-dom';
import './insurance.css';

 class Insurance extends React.Component{
   render(){
     return(
       <div>
          <header>
             <h1>HealthCare Insurance</h1>
          </header>
          <h3>Insurance Page</h3>
         <div className="tbl">
           <h2>Approved Records</h2>
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

ReactDOM.render(<Insurance />, document.getElementById('root'));
