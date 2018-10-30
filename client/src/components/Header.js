import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    console.log('this auth', this.props.auth);
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In With Google</a>
          </li>
        );
      default:
        return [
          <li key="2">
            <a href="/api/logout">Log Out</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div className="row" style={{ marginBottom: 0 }}>
        <nav>
          <div className="nav-wrapper blue darken-3">
            <Link to={this.props.auth ? '/home' : '/'} className="brand-logo">
              Docket
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
