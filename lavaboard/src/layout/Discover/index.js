import * as React from "react";
import { useNavigate } from "react-router-dom";

//import css
import "../layout.css"

//import MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// comp
import DiscoverHeader from "./DiscoverHeader";

// assets
import discover from "../../assets/gif/Discover.gif";

function Discover() {

    let navigate = useNavigate();

    return (
        <Box>
            <DiscoverHeader/>
            <img
                style={{height:"93.16vh", width:"100%", position:"absolute", zIndex:10}}
                src={discover}
                alt="background shapes">
            </img>
            <Typography variant="h1" component="div" className="discoverH1">
                Crée ton propre dashboard
            </Typography>
            <Typography variant="h5" component="div" className="discoverH5">
                Des centaines de widgets disponibles. Aucune carte de crédit nécessaire.
            </Typography>
            <Button style={{color:"#fdd5b1", backgroundColor:"#ff7f50", zIndex:20}} className="btn" size="large" variant="contained" onClick={ () => navigate("/register")}>S'inscrire gratuitement</Button>
        </Box>
  );
}

export default Discover;