export const SET_RECIPES = 'SET_RECIPES';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export function setRecipes(items) {
	return {
		type: SET_RECIPES,
		items
	};
}

export function addFavorite(recipe) {
	return {
		type: ADD_FAVORITE,
		recipe
	}
}