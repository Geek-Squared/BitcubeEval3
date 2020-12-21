import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


export default function Home(){
    return(
        <div>
            <div class="jumbotron">
            <h1 class="display-4">Welcome Professor Jacobs</h1>
            <p class="lead">Attention:Please note there's a staff meeting 13:00 hrs in the staff hall</p>
            <hr class="my-4" />
            <p class="lead">
                <Link to="/students" class="btn btn-primary btn-lg "  role="button">Students</Link>
                <Link to="/degrees" class="btn btn-primary btn-lg ml-2"  role="button" style={{backgroundColor:"green", borderColor:"green"}}>Degrees</Link>

            </p>
            </div>
          
        </div>
    )
}