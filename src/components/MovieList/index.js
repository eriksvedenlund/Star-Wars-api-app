import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableCell, TableBody, TableHead, TableRow } from '@material-ui/core';
import { styles } from './styles'; 

class MovieList extends Component {
	selectMovie = movie => {
		this.props.selectMovie(movie);
	}

  renderRows = () => {
    const { classes, movies } = this.props;
    return movies.map(movie => {
      return (
        <TableRow key={movie.id} className={classes.tableRow} onClick={() => this.selectMovie(movie.fields)}>
          <TableCell>EPISODE {movie.fields.episode_id}</TableCell>
          <TableCell style={{ fontWeight: 'bold' }}>{movie.fields.title}</TableCell>
          <TableCell>{movie.fields.release_date}</TableCell>
        </TableRow>
      );
    })
  }

  render() {
    const { classes } = this.props;
    return (
    	<div className={classes.container}>
	    	<Table>
	        <TableHead>
	          <TableRow>
	            <TableCell>Episode</TableCell>
	            <TableCell>Title</TableCell>
	            <TableCell>Year</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {this.renderRows()}
	        </TableBody>
	      </Table>
    	</div>
    ); 
  }
}

export default withStyles(styles)(MovieList);