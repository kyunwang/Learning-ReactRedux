import React from 'react';
import { connect } from 'react-redux';

import RecipeCard from './RecipeCard';

function FavoriteRecipes({ favoriteRecipes }) {
	console.log(favoriteRecipes);
	return (
		<div>
			<h4>My Favorite Recipes</h4>
			{
				favoriteRecipes.map((recipe, index) => {
					return (
						<RecipeCard
							key={index}
							recipe={recipe}
						/>
					)
				})
			}
		</div>
	)
}

export default connect(({ favoriteRecipes }) => ({ favoriteRecipes }), null)(FavoriteRecipes);
