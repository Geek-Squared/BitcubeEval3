import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

export default function Students(){
    return(
        <div>
            <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">MyStudents</h1>
          <p class="lead">Your Students Who Are Currently Enrolled In Your Classes.</p>
        </div>
      </div>

    
      <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Degree</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Bruce Banner</td>
                <td>Bsc Neuroscience</td>
               
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Tony Stark</td>
                <td>Bsc Computer Science</td>
                
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Steve Rodgers</td>
                <td>B.A History</td>
                
                </tr>
            </tbody>
            </table>

            <div className="container" style={{marginTop: '70px'}}>
        
                <AddStudent />,
                <EditStudent />,
               
            </div>
        </div>
        

      
    )
}