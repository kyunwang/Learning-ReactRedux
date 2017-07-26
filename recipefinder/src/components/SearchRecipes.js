import React, { Component } from 'react';
import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Button
} from 'react-bootstrap';
import axios from 'axios';

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
		// .then(res => res.json())

		axios.get(url)
			.then(res => {
				console.log(res);
				return res;
			})
			.catch(err => console.log(err))
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

export default SearchRecipes;