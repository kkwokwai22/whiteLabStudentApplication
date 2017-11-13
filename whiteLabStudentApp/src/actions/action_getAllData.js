import axios from 'axios';

export const FETCH_STUDENTDATA = 'FETCH_STUDENTDATA';

// starting of the application I will fetch the studentData
export function getAllData() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	let allStudentData = axios.get(urlStudentData);
	return {
		type: FETCH_STUDENTDATA,
		payload: allStudentData
	};
}
