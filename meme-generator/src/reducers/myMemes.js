import { NEW_MEME } from '../actions';

function myMemes(state = [], action) {
	switch (action.type) {
		case NEW_MEME:
			if (!action.meme.success) { return state };
			return [
				...state,
				action.meme
			];
		default:
			return state;
	}
}

export default myMemes;