export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const RESET_TEAM = 'RESET_TEAM';

export function addCharacterById(id) {
	return {
		type: ADD_CHARACTER,
		id
	};
}

export function removeCharacterById(id) {
	return {
		type: REMOVE_CHARACTER,
		id
	};
}

export function resetTeam() {
	return {
		type: RESET_TEAM
	}
}