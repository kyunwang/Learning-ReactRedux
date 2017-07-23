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
							<li key={character.id} className='list-group-item between'>
								<div className='list-item'>{character.name}</div>
								<div
									className='list-item right-button'
									onClick={() => { props.addCharacterById(character.id) }}
								>
									+
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