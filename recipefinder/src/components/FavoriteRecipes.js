import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteFavorite } from '../actions/';

import RecipeCard from './RecipeCard';

function FavoriteRecipes({ favoriteRecipes }) {
	return (
		<div>
			<h4 className="link">
				<Link to="/">To Home</Link>
			</h4>
			<h4>My Favorite Recipes</h4>
			{
				favoriteRecipes.map((recipe, index) => {
					return (
						<RecipeCard
							key={index}
							recipe={recipe}
							deleteBtn
						/>
					);
				})
			}
		</div>
	)
}

export default connect(({ favoriteRecipes }) => ({ favoriteRecipes }), null)(FavoriteRecipes);
