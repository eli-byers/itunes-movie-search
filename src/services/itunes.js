import axios from "axios";

export function searchMovies(term) {
  return axios.get(`https://itunes.apple.com/search`, {
    params: {
      entity: "movie",
      term: term
    }
  });
}
