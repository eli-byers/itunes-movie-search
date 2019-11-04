import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 4,
      pageSelected: 0,
      sortColumn: { path: "trackName", order: "asc" }
    };
  }

  formatCount(count) {
    let label = `${count} movie`;
    if (count > 1) label += "s";
    return label;
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn, pageSelected: 0 });
  };

  handlePageChange = page_idx => {
    this.setState({ pageSelected: page_idx });
  };

  currentPage = () => {
    const { movies } = this.props;
    const { pageSize, pageSelected, sortColumn } = this.state;
    let sorted = _.orderBy(movies, [sortColumn.path], sortColumn.order);
    const page = paginate(sorted, pageSize, pageSelected);
    return { totalCount: movies.length, data: page };
  };

  render() {
    const { sortColumn, pageSize, pageSelected } = this.state;
    const { totalCount, data: page } = this.currentPage();
    return (
      <div className="row">
        <div className="col">
          {totalCount === 0 ? (
            <p>Search to find a movie</p>
          ) : (
            <React.Fragment>
              <p>Found {this.formatCount(totalCount)}</p>
              <MoviesTable
                movies={page}
                sortColumn={sortColumn}
                onSort={this.handleSort}
              />
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                pageSelected={pageSelected}
                onPageChange={this.handlePageChange}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Movies;
