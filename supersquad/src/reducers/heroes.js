import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

export function heroes(state = [], action) {
	switch (action.type) {
		case ADD_CHARACTER:
			return [
				...state,
				createCharacter(action.id)
			]
		case REMOVE_CHARACTER:
			let characters = state.filter(item => item.id !== action.id);
			return characters;
		default:
			return state;
	}
}

