import React, { Component } from "react";
import isEmpty from "../validations/is-empty";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../actions/authActions";
import { connect } from "react-redux";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    if (
      !isEmpty(userData.email) &&
      !isEmpty(userData.password) &&
      !isEmpty(userData.firstName) &&
      !isEmpty(userData.lastName)
    ) {
      this.props.registerUser(userData, this.props.history);
    }
  }

  render() {
    return (
      <div className="RegisterPage">
        <div className="container input-form">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field register col s6">
                <input
                  id="firstName"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field register col s6">
                <input
                  id="lastName"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field register col s12">
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
              <div className="input-field register col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.onChange}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              id="submit-register-button"
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

RegisterPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterPage));
