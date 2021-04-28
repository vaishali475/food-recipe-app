import React from "react";

import "../App.css";
import "../App";
class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron py-5">
        <h1 className="display-1">
          <i className="material-icons brand-icon">fastfood</i>Food recipe
        </h1>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Search Your Recipe"
            value={this.props.search}
            onChange={this.props.onInputChange}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button className="btn btn-dark" onClick={this.props.onSearchClick}>
            search recipe
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
