import { combineReducers } from 'redux';
import searchList from './search-list/reducer.js';
import searchForm from './search-form/reducer.js';

const reducers = combineReducers({
  searchList,
  searchForm
});

export default reducers;
