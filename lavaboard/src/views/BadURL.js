import * as React from "react";

//CSS
import "./views.css"

//Img
import errorURL from "../assets/404.png";
import pulpFiction from "../assets/gif/pulpFiction.gif";

function BadURL() {

    return (
        <div>
            <img
                className="Img1"
                src={pulpFiction}
                alt="404 not found">
            </img>
            <img
                className="Img2"
                src={errorURL}
                alt="404 not found">
            </img>
        </div>
    );
}

export default BadURL;