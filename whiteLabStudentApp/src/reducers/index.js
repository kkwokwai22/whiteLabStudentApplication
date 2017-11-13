import { combineReducers } from 'redux';
import AllCourseDataReducer from './reducer_allcoursedata';
import CourseData2015Reducer from './reducer_2015coursedata';
import CourseData2016Reducer from './reducer_2016coursedata';

const rootReducer = combineReducers({
	allCourseData: AllCourseDataReducer,
	data2015Course: CourseData2015Reducer,
	data2016Course: CourseData2016Reducer
});

export default rootReducer;
