import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import MemeItem from './MemeItem';

class App extends Component {
	constructor() {
		super();
		this.state = {
			memeLimit: 10
		}
	}
	render() {
		return (
			<div>
				<h2>Welcome to The Meme Generator</h2>
				{
					this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
						return (
							<MemeItem key={index} meme={meme} />
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