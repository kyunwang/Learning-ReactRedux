import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import '../styles/index.css';

const HeroList = (props) => {
	return (
		<div>
			<h4>The Hero Squad</h4>
			<ul className='list-group'>
				{
					props.heroes.map(hero => {
						return (
							<li key={hero.id} className='list-group-item column'>
								<div className='hero-info-con'>
									<div key={hero.id} className='list-item'>{hero.name}</div>
									<div
										className='list-item right-button'
										onClick={() => {
											props.removeCharacterById(hero.id)
										}}
									>-</div>
								</div>

								<div className='list-item hero-info-con'>
									<p><b>Str:</b> {hero.strength}</p>
									<p><b>Spd:</b> {hero.speed}</p>
									<p><b>Int:</b> {hero.intelligence}</p>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>

	)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// export default connect(mapStateToProps, null)(HeroList);
export default connect(({ heroes }) => ({ heroes }), mapDispatchToProps)(HeroList);