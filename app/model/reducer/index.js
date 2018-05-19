import { combineReducers } from 'redux';
import ProvinceReducer from './province_reducer.js';

const rootReducer = combineReducers({
    provinces: ProvinceReducer
})

export default rootReducer;