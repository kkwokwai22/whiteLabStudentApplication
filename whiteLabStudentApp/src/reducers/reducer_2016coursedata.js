import { FETCH_2016DATA } from '../actions/action_get2016data';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_2016DATA:
			const dataFor2016 = [...action.payload.data];
			return dataFor2016.filter(val => {
				if (val.year === 2016) {
					return val;
				}
			});
	}
	return state;
}
