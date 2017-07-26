import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const CharacterList = (props) => {
	return (
		<div>
			<h4>Characters</h4>
			<ul className='list-group'>
				{
					props.characters.map(character => {
						return (
							<li key={character.id} className='list-group-item'>
								<div className='hero-info-con'>
									<div className='list-item'>{character.name}</div>
									<div
										className='list-item right-button'
										onClick={() => { props.addCharacterById(character.id) }}
									>+</div>
								</div>
								<div className='list-item hero-info-con'>
									<p><b>Str:</b> {character.strength}</p>
									<p><b>Spd:</b> {character.speed}</p>
									<p><b>Int:</b> {character.intelligence}</p>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		characters: state.characters
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
// export default connect(mapStateToProps, { addCharacterById })(CharacterList);