import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Registration from "./components/registration.component";
import Login from "./components/login.component";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default App;
