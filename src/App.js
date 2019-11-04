import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import { searchMovies } from "./services/itunes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  handleSearch = term => {
    searchMovies(term)
      .then(data => {
        this.setState({ movies: data.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        <NavBar onSearch={this.handleSearch} />
        <main className="container">
          <Movies movies={movies} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
