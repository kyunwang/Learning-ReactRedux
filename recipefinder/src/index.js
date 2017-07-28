import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import App from './components/App';
import FavoriteRecipes from './components/FavoriteRecipes';

const store = createStore(rootReducer);
store.subscribe(() => { console.log(store.getState()); })

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				{/* <Route path='/' component={App} /> */}
				<Route path='/favorites' component={FavoriteRecipes} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);