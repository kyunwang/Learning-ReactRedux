import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../actions';


class RecipeCard extends Component {
	static get defaultProps() {
		return {
			favoriteBtn: false
		}
	}

	constructor() {
		super();
		this.state = {
			favorited: false
		}
	}

	favorite(recipe) {
		this.props.addFavorite(recipe);
		this.setState({ favorited: true })
	}


	render() {
		let { recipe, favoriteBtn } = this.props;
		return (
			<div className="recipe-item">
				{
					favoriteBtn ?

						this.state.favorited ?
							<div
								className="star"
							// onClick={() => this.favorite(recipe)}				
							>
								&#9733;
						</div>
							:
							<div
								className="star"
								onClick={() => this.favorite(recipe)}
							>

								&#9734;
						</div>

						:
						null
				}

				<img
					className="recipe-img"
					src={recipe.thumbnail}
					alt={recipe.title}
				/>
				<div className="recipe-text">
					<a href={recipe.href}>
						<h4>{recipe.title}</h4>
					</a>
					<p>{recipe.ingredients}</p>
				</div>

			</div>
		);
	}
}

export default connect(null, { addFavorite })(RecipeCard);