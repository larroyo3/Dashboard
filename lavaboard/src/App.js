import * as React from "react";
import { Link } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div class="wrapper">
      <h1>Viens créer ton Dashbord</h1>
      <nav>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </nav>
    </div>
  );
}

export default App;

