import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
const ActionButton = props => {
  return (
    <div className="fixed-action-btn" onClick={props.logOutUser}>
      <Link className="btn-floating btn-large red">
        <i className="large material-icons">highlight_off</i>
      </Link>
    </div>
  );
};

ActionButton.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(ActionButton);
