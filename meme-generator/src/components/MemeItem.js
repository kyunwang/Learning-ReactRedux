import React, { Component } from 'react';
import { createMeme } from '../actions';
import { connect } from 'react-redux';

class MemeItem extends Component {
	constructor() {
		super();
		this.state = {
			hovered: false
		}
	}

	postMeme() {
		let { text0, text1, createMeme } = this.props;
		let memeObj = {
			template_id: this.props.meme.id,
			text0: text0,
			text1: text1
		};
		createMeme(memeObj);
	}

	render() {
		let { meme } = this.props;
		return (
			<div
				className="meme-item"
				onMouseEnter={() => this.setState({ hovered: true })}
				onMouseLeave={() => this.setState({ hovered: false })}
				onClick={() => this.postMeme()}
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
export default connect(null, { createMeme })(MemeItem);