import React, { Component } from 'react';

class MemeItem extends Component {
	render() {
		let { meme } = this.props;
		return (
			<div className="meme-item">
				<img
					src={meme.url}
					alt={meme.name}
					className="meme-img"
				/>
				<h4 className="meme-text">{meme.name}</h4>
			</div>
		);
	}
};
export default MemeItem;