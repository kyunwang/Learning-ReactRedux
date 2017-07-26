import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';

import * as actionCreators from '../actions';

import '../styles/index.css';

// This can be a stateless component
class App extends Component {
	render() {
		return (
			<div className='App'>
				<h2>SuperSquad</h2>
				<button
					className='btn btn-secondary'
					type='button'
					onClick={() => { this.props.resetTeam() }}
				>
					Reset Team</button>
				<div className='row'>
					<div className='col-sm-12 col-md-4'>
						<CharacterList />
					</div>
					<div className='col-sm-12 col-md-4'>
						<HeroList />
					</div>
					<div className='col-sm-12 col-md-4'>
						<SquadStats />
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(App);