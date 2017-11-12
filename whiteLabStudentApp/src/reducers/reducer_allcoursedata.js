import { FETCH_STUDENTDATA, FETCH_2015DATA } from '../actions/action_getAllData';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_STUDENTDATA:
            console.log('the payload', action.payload);
            return [action.payload.data, ...state];
        case FETCH_2015DATA:
            const dataFor2015 = [...state];
            console.log('the original state', state);
            return dataFor2015[0].map(val => {
                if (val.year === 2015) {
                    return val;
                }
            });
    }
    return state;
}
