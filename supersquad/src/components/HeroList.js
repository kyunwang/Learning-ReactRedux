import React, { Component } from 'react';
import { connect } from 'react-redux';

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
								<li key={hero.key} className='list-group-item'>
									<div className='list-item'>{hero.name}</div>
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

// function mapDispatchToProps()

// export default connect(mapStateToProps, null)(HeroList);
export default connect(({ heroes }) => ({ heroes }))(HeroList);