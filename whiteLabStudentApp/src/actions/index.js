import axios from 'axios';

function fetchData() {
	const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
	const request = axios.get(urlStudentData);
	console.log('Request:', request);
}

fetchData();
