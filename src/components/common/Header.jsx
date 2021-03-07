import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
