import { FETCH_2015DATA } from '../actions/action_get2015data';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_2015DATA:
			const dataFor2015 = [...action.payload.data];
			return dataFor2015.filter(val => {
				if (val.year === 2015) {
					return val;
				}
			});
	}
	return state;
}
