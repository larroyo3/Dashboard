import * as React from 'react';
import { useNavigate } from "react-router-dom";

//import MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function DiscoverHeader() {

  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{color:"white", backgroundColor:"black"}} position="static">
        <Toolbar >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{fontWeight: "bold"}}>
            LAVABOARD
          </Typography>
          <Button style={{marginRight: 20}} variant="outlined" color="inherit" onClick={ () => navigate("/register")}>S'inscrire</Button>
          <Button style={{marginRight: 10}} variant="outlined" color="inherit" onClick={ () => navigate("/login")}>Connexion</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}