import { combineReducers } from 'redux';

import recipes from './recipes';
import favoriteRecipes from './favoriteRecipes';

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;