import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import '../styles/index.css';

class HeroList extends Component {
	render() {
		return (
			<div>
				<h4>The Hero Squad</h4>
				<ul className='list-group'>
					{
						this.props.heroes.map(hero => {
							return (
								<li key={hero.id} className='list-group-item between'>
									<div key={hero.id} className='list-item'>{hero.name}</div>
									<div
										className='list-item right-button'
										onClick={() => {
											this.props.removeCharacterById(hero.id)
										}}
									>-</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		heroes: state.heroes
// 	}
// }

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
} 

// export default connect(mapStateToProps, null)(HeroList);
export default connect(({ heroes }) => ({ heroes }), mapDispatchToProps)(HeroList);