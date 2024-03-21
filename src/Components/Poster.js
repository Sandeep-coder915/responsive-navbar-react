import React  from "react";

function  Poster({ poster }) {
    return (
        <div className="Poster">
            <img src='../../images/first.jpg' alt="poster" width={"100%"}
              />
            <div className="content">
                BUrger
                </div>
      <div id="hr1">
        <hr></hr>
      </div>
        </div>
    );
}


export default Poster;