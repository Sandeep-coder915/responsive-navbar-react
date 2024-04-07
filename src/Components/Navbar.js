import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import "./Navbar.css";

//using a react dom create the the routing using route browserrouter and links

class Navbar extends Component {
    state = { clicked: false };

    // Define the HandleClick function here
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <>
                <nav>
                    <a className='Logi'><img src="../../images/logo.svg" alt="Logo"></img></a>
                    <div >
                        <ul id='navbar1' className={this.state.clicked ? "active" : ""}>
                            {/* <li ClassName='active'><Link to='./' >Home</Link></li> */}
                            <li><a href="./" className='active'>Home</a></li>
                            <li><a href="index.html">About</a></li>
                            <li><a href="index.html">Contact</a></li>
                            <li><a href="Contact.js">Blog</a></li>
                        </ul>
                    </div>
                    <div id='resposive' onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
