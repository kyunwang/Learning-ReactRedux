import React from 'react';

function RecipeCard({ recipe }) {
	return (
		<div>
			<h4>{recipe.title}</h4>
			<p>{recipe.ingredients}</p>
		</div>
	);
}

export default RecipeCard;