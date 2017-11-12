import axios from 'axios';

export const FETCH_STUDENTDATA = 'FETCH_STUDENTDATA';
export const FETCH_2015DATA = 'FETCH_2015DATA';
export const FETCH_2016DATA = 'FETCH_2016DATA';

// starting of the application I will fetch the studentData
export function getAllData() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	let allStudentData = axios.get(urlStudentData);
	console.log('response', allStudentData);
	return {
		type: FETCH_STUDENTDATA,
		payload: allStudentData
	};
}

export function get2015Data() {
	return {
		type: FETCH_2015DATA
	};
}

export function get2016Data() {
	return {
		type: FETCH_2016DATA
	};
}
