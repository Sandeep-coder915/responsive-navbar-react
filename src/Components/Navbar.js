import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import "./Navbar.css";

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
                    <a><img src="../../images/logo.svg" alt="Logo"></img></a>
                    <div >
                        <ul id='navbar1' className={this.state.clicked ? "active" : ""}>
                            {/* <li><Link to='./' ClassName='active'>Home</Link></li> */}
                            {/* <li><a href="./" className='active'>Home</a></li> */}
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
