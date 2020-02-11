import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../validations/is-empty";
import { loginUser } from "../actions/authActions";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.auth) {
      this.props.history.push("/dashboard");
    }
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    if (!isEmpty(userData.email) && !isEmpty(userData.password)) {
      this.props.loginUser(userData);
    }
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="container input-form">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.onChange}
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.onChange}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6" style={{textAlign: 'left'}}>
                <Link to="/register">Create an account</Link>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              id="submit-login-button"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginPage);
