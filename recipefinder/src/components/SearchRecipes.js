import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Button
} from 'react-bootstrap';
import axios from 'axios';

import { setRecipes } from '../actions/index';

class SearchRecipes extends Component {
	constructor() {
		super();
		this.state = {
			ingredients: '',
			dish: ''
		}
	}

	search() {
		let { ingredients, dish } = this.state;
		const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

		// fetch(url, { method: 'GET' })
		// 	.then(res => res.json())
		// 	.then(json => this.props.setRecipes(json));

		axios.get(url)
			.then(res => this.props.setRecipes(res.data.results))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Form inline>
				<FormGroup>
					<ControlLabel>Ingredients</ControlLabel>
					{' '}
					<FormControl
						type='text'
						placeholder='e.g. ginger, chicken'
						onChange={(event) => this.setState({ ingredients: event.target.value })}
					/>
				</FormGroup>
				{' '}
				<FormGroup>
					<ControlLabel>Dish</ControlLabel>
					{' '}
					<FormControl
						type='text'
						placeholder='e.g. soup'
						onChange={(event) => this.setState({ dish: event.target.value })}
					/>
				</FormGroup>
				{' '}
				<Button
					onClick={() => this.search()}
				>Submit</Button>
			</Form>
		);
	}
}

export default connect(null, { setRecipes })(SearchRecipes);