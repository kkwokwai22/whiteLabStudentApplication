import axios from 'axios';

export const FETCH_STUDENTDATA = 'FETCH_STUDENTDATA';

export function getAllData() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	let allStudentData = axios.get(urlStudentData);
	// .then(response => {
	// 	console.log('response.data', response.data);
	// 	allStudentData = response.data;
	// })
	// .catch(error => {
	// 	console.log('error ', error);
	// });
	return {
		type: FETCH_STUDENTDATA,
		payload: allStudentData
	};
}
