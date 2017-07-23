import React from 'react';
import { connect } from 'react-redux';


function overalStr(props) {
	let strength = 0;
	props.heroes.forEach(hero => strength += hero.strength);
	return strength;
}

function overalInt(props) {
	let intelligence = 0;
	props.heroes.forEach(hero => intelligence += hero.intelligence);
	return intelligence;
}

function overalSpd(props) {
	let speed = 0;
	props.heroes.forEach(hero => speed += hero.speed);
	return speed;
}

const SquadStats = (props) => {
	return (
		<div>
			<h4>Squad Stats</h4>
			<ul className='list-group'>
				<li className='list-group-item'>
					<p><b>Overall Strength:</b> {overalStr(props)}</p>
				</li>
				<li className='list-group-item'>
					<p><b>Overall Speed:</b> {overalSpd(props)}</p>
				</li>		
				<li className='list-group-item'>
					<p><b>Overall Intelligence:</b> {overalInt(props)}</p>
				</li>
			</ul>
		</div>
	)
}

// export default connect(mapStateToProps, null)(SquadStats);
export default connect(
	({heroes}) => ({heroes})
)(SquadStats);