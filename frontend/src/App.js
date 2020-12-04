import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/registration";
import Login from "./components/login";
import HomePage from "./components/HomePage";
import CreateUser from "./components/CreateUser";

const App = () => {
  return (
    <Router>
      
      <div className="container">
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/createuser" component={CreateUser} />

      </div>
    </Router>
  );
};

export default App;
