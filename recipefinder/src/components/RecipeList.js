import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				{
					this.props.recipes.map((recipe, index) => {
						return (
							<div key={index}>
								<h4>{recipe.title}</h4>
								<p>{recipe.ingredients}</p>
							</div>
						)
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(RecipeList);
// export default connect(state => state)(RecipeList);