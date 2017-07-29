import React, { Component } from 'react';
import {
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';

import './App.css'

import AgeStats from './AgeStats';
import ErrorMsg from './ErrorMsg';

class App extends Component {
	constructor() {
		super()
		this.state = {
			newDate: '',
			showStats: false,
			showError: false
		}
	}

	_changeBirthday() {
		if (this.state.newDate === '') {
			this.setState({ showError: true, showStats: false });
			return;
		};

		this.setState({
			birthday: this.state.newDate,
			showStats: true,
			showError: false
		})
	}

	render() {
		return (
			<div className='App'>
				<h2>Input your birthday</h2>
				<Form inline >
					<FormControl
						className='date-form'
						type='date'
						onChange={event => this.setState({ newDate: event.target.value })}
					>
					</FormControl>
					{' '}
					<Button
						onClick={() => this._changeBirthday()}>
						Submit
					</Button>
				</Form>
				{
					this.state.showStats ?
						<div className='fade'>
							<AgeStats date={this.state.birthday} />
						</div> :
						null
				}

				{
					this.state.showError ?
						<div className='fade'>
							<ErrorMsg />
						</div> :
						null
				}
			</div>
		);
	}
}

export default App;