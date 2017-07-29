export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
	let { memes } = json.data;
	return {
		type: RECEIVE_MEMES,
		memes
	}
}

// function fetchMemesJson() {
// 	return fetch('https://api.imgflip.com/get_memes')
// 		.then(res => res.json())
// 		.catch(err => console.log(err));
// }

// export function fetchMemes() {
// 	return function (dispatch) {
// 		return fetchMemesJson()
// 			.then(res => dispatch(receiveMemes(res)))
// 			.catch(err => console.log(err));
// 	}
// }

// OR

export function fetchMemes() {
	return function (dispatch) {
		return fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
			.then(json => dispatch(receiveMemes(json)))
			.catch(err => console.log(err));
	}
}