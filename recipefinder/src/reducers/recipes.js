import { SET_RECIPES } from '../actions/index';

export default function recipes(state = [], action) {
	switch (action.type) {
		case SET_RECIPES:
			return action.items
		default:
			return state;
	};
}