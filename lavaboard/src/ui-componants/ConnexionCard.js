import * as React from 'react'
import logo from '../assets/volcanBeige200.jpg';
import "./ui-components.css"

function ConnexionCard({ children }) {
    return (
        <div>
                <img
                    src={logo}
                    alt="Logo volcan">
                </img>
                {children}
        </div>
    );
}

export default ConnexionCard;