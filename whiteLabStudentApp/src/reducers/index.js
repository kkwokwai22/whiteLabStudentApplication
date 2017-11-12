import { combineReducers } from 'redux';
import AllCourseDataReducer from './reducer_allcoursedata';

const rootReducer = combineReducers({
	allCourseData: AllCourseDataReducer
});

export default rootReducer;
