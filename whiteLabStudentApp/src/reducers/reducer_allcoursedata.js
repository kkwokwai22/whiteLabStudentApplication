import { FETCH_STUDENTDATA } from '../actions/action_getAllData';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_STUDENTDATA:
            return action.payload.data;
    }
    return state;
}
