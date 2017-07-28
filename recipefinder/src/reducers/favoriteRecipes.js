import { ADD_FAVORITE } from '../actions/index'

export default function favoriteRecipes(state = [], action) {
	switch (action.type) {
		case ADD_FAVORITE:
			return [
				...state,
				action.recipe
			]
		default:
			return state;
	}
}