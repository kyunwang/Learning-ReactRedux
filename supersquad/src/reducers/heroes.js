import { ADD_CHARACTER, REMOVE_CHARACTER, RESET_TEAM } from '../actions';
import { createCharacter } from './helpers';

export function heroes(state = [], action) {
	console.log(action);
	switch (action.type) {
		case ADD_CHARACTER:
			return [
				...state,
				createCharacter(action.id)
			];
		case REMOVE_CHARACTER:
			let characters = state.filter(item => item.id !== action.id);
			return characters;
		case RESET_TEAM:
			return [];
		default:
			return state;
	}
}

