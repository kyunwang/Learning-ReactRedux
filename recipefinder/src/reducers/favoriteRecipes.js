import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/index'

export default function favoriteRecipes(state = [], action) {
	switch (action.type) {
		case ADD_FAVORITE:
			return [
				...state,
				action.recipe
			];
		case DELETE_FAVORITE:
			let recipes = state.filter(recipe => recipe !== action.recipe);
			return recipes;
		default:
			return state;
	}
}