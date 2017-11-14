import axios from 'axios';

export const FETCH_STUDENTDATA = 'FETCH_STUDENTDATA';
export const SET_YEAR = 'SET_YEAR';
export const CLEAR_YEAR = 'CLEAR_YEAR';
export const SET_COURSE = 'SET_COURSE';
export const CLEAR_COURSE = 'CLEAR_COURSE';

// starting of the application I will fetch the studentData
export function getAllData() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	let allStudentData = axios.get(urlStudentData);
	return {
		type: FETCH_STUDENTDATA,
		payload: allStudentData
	};
}

export const setYear = year => ({
	type: SET_YEAR,
	year
});

export const clearYear = _ => ({
	type: CLEAR_YEAR
});

export const setCourse = course => ({
	type: SET_COURSE,
	course
});

export const clearCourse = _ => ({
	type: CLEAR_COURSE
});
