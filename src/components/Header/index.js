import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, FormControl, OutlinedInput, InputLabel, Select, MenuItem,
 TextField, InputAdornment } from '@material-ui/core';
 import SearchIcon from '@material-ui/icons/Search';
import { styles } from './styles'; 

class Header extends Component {
	state = {
		labelWidth: 0,
	}

	componentDidMount() {
		this.setState({
			labelWidth: ReactDOM.findDOMNode(this.labelRef).offsetWidth,
		});
	}

	render() {
		const { classes, search, sortValue, setField, sortBy } = this.props;
		return (
			<AppBar className={classes.appBar}>
				<Toolbar>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel
							ref={ref => {
								this.labelRef = ref;
							}}
							classes={{
								root: classes.labelRoot,
							}}
							htmlFor="sortBy"
						>
							Sort by
						</InputLabel>
						<Select
							value={sortValue}
							onChange={(e) => sortBy(e)}
							input={
								<OutlinedInput
									labelWidth={this.state.labelWidth}
									name="sortValue"
									id="sortBy"
									inputProps={{ className: classes.inputPadding }}
								/>
							}
						>
							<MenuItem value="episode_id">Episode</MenuItem>
							<MenuItem value="release_date">Year</MenuItem>
						</Select>
					</FormControl>
					<TextField
						label="Type to search..."
						placeholder="Type to search..."
						variant="outlined"
						name="search"
						value={search}
						type="text"
						autoComplete="off"
						onChange={(e) => setField(e)}
						className={classes.textField}
						InputLabelProps={{
							classes: {
								root: classes.labelRoot,
							}
						}}
						InputProps={{
							inputProps: { className: classes.inputPadding },
							startAdornment: (
								<InputAdornment>
									 <SearchIcon />
								</InputAdornment>
							)
						}}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(Header);