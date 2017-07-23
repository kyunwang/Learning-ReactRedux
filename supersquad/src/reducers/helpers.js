import characters_json from '../data/characters.json';


// helper function for heroes reducer
export function createCharacter(id) {
	let character = characters_json.find(c => c.id === id);
	return character;
}