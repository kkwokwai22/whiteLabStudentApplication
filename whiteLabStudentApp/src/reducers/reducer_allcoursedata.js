import { FETCH_STUDENTDATA, FETCH_2015DATA, FETCH_2016DATA } from '../actions/action_getAllData';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_STUDENTDATA:
            console.log('the payload', action.payload.data);
            return action.payload.data;
        case FETCH_2015DATA:
            const dataFor2015 = [...state];
            return dataFor2015.filter(val => {
                if (val.year === 2015) {
                    return val;
                }
            });
        case FETCH_2016DATA:
            const dataFor2016 = [...state];
            return dataFor2016.filter(val => {
                if (val.year === 2016) {
                    return val;
                }
            });
    }
    return state;
}
