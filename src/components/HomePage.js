import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="container">
        <Link
          to="/dashboard"
          className="waves-effect waves-light btn-large"
          id="register-button"
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className="waves-effect waves-light btn-large"
          id="login-button"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
