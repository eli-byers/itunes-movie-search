import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      key: "thumbnail",
      content: movie => <img src={movie.artworkUrl100} alt="thumb" />
    },
    { path: "trackName", label: "Title" },
    {
      path: "shortDescription",
      label: "Description",
      content: movie => this.shortDescription(movie)
    },
    { path: "trackPrice", label: "Price" }
  ];

  shortDescription = movie => {
    // try short
    let desc = movie.shortDescription;
    if (desc && desc.length <= 98) return desc;
    // try long
    desc = movie.longDescription;
    if (!desc) return "Not Available";
    // trim long
    let idx = 98;
    while (idx > 0 && desc[idx] !== " ") {
      idx -= 1;
    }
    return desc.slice(0, idx);
  };

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        rowKeyProperty="trackId"
      />
    );
  }
}

export default MoviesTable;
