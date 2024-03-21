import React from "react";
import "./OurMenu.css"

function OurMenu() {
    return (
        <>
            <div class="OurMenu"  >
                <div class="Our1">
                    <img src="../../images/second.jpg" alt="Table Setting" width="600" height="750" />
                </div>

                <div class="Our2">
                    <h1 class="w3-center" id="ht"  style={{ color: "gold", fontSize: "50px", fontFamily: "serif" }}>About Catering</h1><br />
                    <h5 class="w3-center" id="ht1" style={{ fontSize: "20px", fontFamily: "serif", marginTop: "5px" }}>Tradition since 1889</h5>
                    <p class="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span id="ht12" class="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                    <div class> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use</div>

                </div>
                <div id="hr">
        <hr></hr>
      </div>

            </div>

        </>
    );
}

export default OurMenu;