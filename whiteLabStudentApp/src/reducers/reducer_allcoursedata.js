import { FETCH_STUDENTDATA } from '../actions/action_getAllData';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_STUDENTDATA:
            console.log('what is action payload', action.payload);
            return [action.payload.data, ...state];
    }
    return state;
}
