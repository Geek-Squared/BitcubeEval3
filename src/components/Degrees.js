import React from 'react';

export default function  Degrees(){
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-4">Your Degrees</h1>
            <p className="lead">Your Current Degrees.</p>
            </div>
            </div>

            <div id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Bsc Neuroscience
                    </button>
                </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                <ul class="list-group">
                    <li class="list-group-item disabled">Courses</li>
                    <li class="list-group-item">Space</li>
                    <li class="list-group-item">Sciences</li>
                    <li class="list-group-item">Exploration</li>
                    <li class="list-group-item">Physics</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bsc Computer Science
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                <ul class="list-group">
                    <li class="list-group-item disabled">Courses</li>
                    <li class="list-group-item">Intro to Programming</li>
                    <li class="list-group-item">Mathematics</li>
                    <li class="list-group-item">Java</li>
                    <li class="list-group-item">Web Development</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    B.A History
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                <ul class="list-group">
                    <li class="list-group-item disabled">Courses</li>
                    <li class="list-group-item">Intro to World War II</li>
                    <li class="list-group-item">Adolf Hitler</li>
                    <li class="list-group-item">The Rothschid</li>
                    <li class="list-group-item">United Nations</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    )
}