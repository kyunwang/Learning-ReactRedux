export const SET_RECIPES = 'SET_RECIPES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

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

export function deleteFavorite(recipe) {
	return {
		type: DELETE_FAVORITE,
		recipe
	}
} 