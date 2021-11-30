import * as React from "react";
import { Link } from "react-router-dom";
import "./App.css"

//import MUI
import Divider from '@mui/material/Divider';

function App() {
  return (
    <div>
      <h1>Viens créer ton Dashbord</h1>
      <Divider />
      <div>
        <Link to="register">Register</Link>
        <Divider />
        <Link to="login">Login</Link>
        <Divider />
        <Link to="dashboard">HomePage</Link>
      </div>
    </div>
  );
}

export default App;

