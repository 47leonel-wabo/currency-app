import React, { Component } from "react";

class List extends Component {
  state = {
    loading: true,
  };
  render() {
    if (this.state.loading) {
      return (
        <div
          style={{ textAlign: "center", fontSize: "24px", color: "blueviolet" }}
        >
          Loading...
        </div>
      );
    }
    return <div className="container">Listing</div>;
  }
}

export default List;
