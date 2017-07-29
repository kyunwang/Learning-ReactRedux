import React from 'react';
import { connect } from 'react-redux';

function MyMemes(props) {
	console.log(props);
	return (
		<div>
			{
				props.myMemes.map((meme, index) => {
					return (
						<img
							key={index}
							src={meme.data.url}
							alt={`my meme ${index}`}
							className="my-meme-img"
						/>
					)
				})
			}
		</div>
	);
};

export default connect(({ myMemes }) => ({ myMemes }), null)(MyMemes);