import React, { Component } from "react";

class NavBar extends Component {
  search = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.search.current.value);
  };

  render() {
    const { onSearch } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          iTunes Movie DB
        </a>

        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            ref={this.search}
          ></input>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
