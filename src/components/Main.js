import React, {Component} from 'react';
import Header from "./header.component/header";
import {BrowserRouter as Router } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <Router>
                <Header/>
            </Router>
        );
    }
}

export default Main;
