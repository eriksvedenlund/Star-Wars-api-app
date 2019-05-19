import React, { Component, Fragment } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';

class App extends Component {
  state = {
    movies: [],
    selectedMovie: null,
    search: '',
    sortValue: ''
  }

  componentDidMount() {
    axios.get('https://star-wars-api.herokuapp.com/films').then(res => {
      this.setState({ movies: res.data });
    })
  }

  selectMovie = movie => {
    this.setState({ selectedMovie: movie });
  }

  setField = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  sortBy = e => {
    this.setState({ 
      [e.target.name]: e.target.value,
      movies: this.state.movies.sort((a, b) => {
        return parseInt(a.fields[e.target.value]) - parseInt(b.fields[e.target.value])
      })
    });
  }

  render() {
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.fields.title.toLowerCase().includes(this.state.search.toLowerCase());
    })
    return (
      <Fragment>
        <CssBaseline />
        <Header 
          setField={this.setField}
          sortBy={this.sortBy} 
          search={this.state.search} 
          sortValue={this.state.sortValue} 
        />
        <div className="wrapper">
          <MovieList movies={filteredMovies} selectMovie={this.selectMovie} />
          <MovieDetails selectedMovie={this.state.selectedMovie} />
        </div>
      </Fragment>
    );
  }
}

export default App;
