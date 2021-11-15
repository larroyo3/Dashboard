import * as React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Viens créer ton Dashbord</h1>
      <nav>
      <Link to="register">Register</Link>
      </nav>
    </div>
  );
}

export default App;

