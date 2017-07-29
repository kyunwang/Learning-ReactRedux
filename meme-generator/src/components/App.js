import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/index.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			memeLimit: 10
		}
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<h2>Welcome to The Meme Generator</h2>
				{
					this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
						return (
							<h4 key={index}>{meme.name}</h4>
						)
					})
				}
				<div
					className="meme-button"
					onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })}
				>Load 10 more memes...</div>
			</div>
		);
	}
}


export default connect(state => state, null)(App);