import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap';

import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component {
	constructor() {
		super();
		this.state = {
			memeLimit: 10,
			text0: '',
			text1: ''
		}
	}
	render() {
		return (
			<div>
				<h2><u>Welcome to The Meme Generator</u></h2>
				<h4><i>Write Your Text</i></h4>

				<MyMemes />

				<Form inline>
					<FormGroup>
						<ControlLabel>Top</ControlLabel>
						{' '}
						<FormControl
							type="text"
							onChange={event => this.setState({ text0: event.target.value })}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Bottom</ControlLabel>
						{' '}
						<FormControl
							type="text"
							onChange={event => this.setState({ text1: event.target.value })}
						/>
					</FormGroup>
				</Form>

				{
					this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
						return (
							<MemeItem
								key={index}
								meme={meme}
								text0={this.state.text0}
								text1={this.state.text1}
							/>
						)
					})
				}

				{
					this.state.memeLimit !== this.props.memes.length ?
						<div
							className="meme-button"
							onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })}
						>
							Load 10 more memes...
						</div>
						:
						null
				}
			</div>
		);
	}
}


export default connect(state => state, null)(App);