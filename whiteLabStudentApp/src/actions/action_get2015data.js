import axios from 'axios';

export const FETCH_2015DATA = 'FETCH_2015DATA';

export function get2015Data() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	let allStudentData2015 = axios.get(urlStudentData);
	console.log('fetch from 2015', allStudentData2015);
	return {
		type: FETCH_2015DATA,
		payload: allStudentData2015
	};
}
