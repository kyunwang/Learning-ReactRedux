import React, { Component } from 'react';

class MemeItem extends Component {
	constructor() {
		super();
		this.state = {
			hovered: false
		}
	}

	render() {
		let { meme } = this.props;
		return (
			<div
				className="meme-item"
				onMouseEnter={() => this.setState({ hovered: true })}
				onMouseLeave={() => this.setState({ hovered: false })}
			>
				<img
					src={meme.url}
					alt={meme.name}
					className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
				/>
				<h4 className={this.state.hovered ? "meme-text" : "no-text"}>{meme.name}</h4>
			</div>
		);
	}
};
export default MemeItem;