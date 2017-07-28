import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../actions';


class RecipeCard extends Component {
	static get defaultProps() {
		return {
			favoriteBtn: false,
			deleteBtn: false
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
		let { recipe, favoriteBtn, deleteBtn, deleteFavorite } = this.props;
		return (
			<div className="recipe-item">
				{
					favoriteBtn ?
						this.state.favorited ?
							<div className="card-button star">
								&#9733;
							</div>
							:
							<div
								className="card-button star"
								onClick={() => this.favorite(recipe)}
							>
								&#9734;
							</div>
						:
						null
				}

				{
					deleteBtn ?
						<div
							onClick={() => deleteFavorite(recipe)}
							className="card-button"
						>
							X
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

export default connect(null, { addFavorite, deleteFavorite })(RecipeCard);