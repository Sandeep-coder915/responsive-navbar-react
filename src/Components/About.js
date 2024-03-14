import React from "react";
import "./About.css"

function About() {
    return (
        <>
            <div class="About"  >
                <div class="ABOUT1">
                    <img src="../../images/second.jpg" alt="Table Setting" width="600" height="750" />
                </div>

                <div class="about2">
                    <h1 class="w3-center" style={{ color: "black", fontSize: "50px", fontFamily: "serif" }}>About Catering</h1><br />
                    <h5 class="w3-center" style={{ fontSize: "20px", fontFamily: "serif", marginTop: "5px" }}>Tradition since 1889</h5>
                    <p class="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                    <div> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use</div>

                </div>


            </div>

        </>
    );
}

export default About;