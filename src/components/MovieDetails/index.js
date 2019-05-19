import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles'; 

const MovieDetails = ({ selectedMovie, classes }) => {
	if (selectedMovie) {
		return (
			<div className={classes.movieContainer}>
				<h3>{selectedMovie.title}</h3>
				<p>{selectedMovie.opening_crawl}</p>
				<p>Directed by: {selectedMovie.director}</p>
			</div>
		);
	}
	return (
		<div className={classes.noMovieContainer}>
			<h4>No movie selected</h4>
		</div>
	);
}

export default withStyles(styles)(MovieDetails);