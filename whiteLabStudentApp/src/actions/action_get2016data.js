import axios from 'axios';

export const FETCH_2016DATA = 'FETCH_2016DATA';

export function get2016Data() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	let allStudentData2016 = axios.get(urlStudentData);
	return {
		type: FETCH_2016DATA,
		payload: allStudentData2016
	};
}
