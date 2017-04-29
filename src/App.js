import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Welcome from './Welcome/Welcome';
import Something from './Something/Something';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <nav className="navbar navbar-inverse">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/about">School Management System</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/other">Other</Link></li>
                                <li><Link to="/another">Another</Link></li>
                            </ul>
                        </nav>
                        <div className="panel panel-default col-md-10 col-md-offset-1">
                            <div className="panel-body">
                                <Route exact path="/" component={() => (<Welcome name="Lqlqlq" />)}/>
                                <Route path="/other" component={() => (<Something name="Other" />)}/>
                                <Route path="/another" component={() => (<Something name="Another" />)}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
