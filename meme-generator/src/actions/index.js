import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json) {
	let { memes } = json.data;
	return {
		type: RECEIVE_MEMES,
		memes
	}
}

function newMeme(meme) {
	return {
		type: NEW_MEME,
		meme
	}
}

export function fetchMemes() {
	return function (dispatch) {
		return fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
			.then(json => dispatch(receiveMemes(json)))
			.catch(err => console.log(err));
	}
}

export function createMeme(params) {
	params['username'] = username;
	params['password'] = password;
	const bodyParams = Object.keys(params).map(key => {
		return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
	}).join('&');

	return function (dispatch) {
		return fetch('https://api.imgflip.com/caption_image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: bodyParams
		})
			.then(res => res.json())
			.then(json => dispatch(newMeme(json)))
			.catch(err => console.log(err));
	}
}



// ### FETCH requests can also be done like this (or with the package axios)
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

