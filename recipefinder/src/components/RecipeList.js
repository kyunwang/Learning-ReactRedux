import React from 'react';
import { connect } from 'react-redux';

import RecipeCard from './RecipeCard';

function RecipeList(props) {
	return (
		<div>
			{
				props.recipes.map((recipe, index) => {
					return (
						<RecipeCard
							key={index}
							recipe={recipe}
							favoriteBtn={true}
						/>
					);
				})
			}
		</div>
	);
}

// function mapStateToProps(state) { return state; }
// export default connect(mapStateToProps, null)(RecipeList);

// No need to create a mapStateToProps function. Use destructuring. It is much easier!
export default connect(state => state)(RecipeList);