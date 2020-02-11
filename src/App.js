import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import PrivateRoute from "./components/utils/PrivateRoute";
import Dashboard from "./components/Dashboard";

//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
