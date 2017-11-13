import { FETCH_STUDENTDATA, SET_YEAR, CLEAR_YEAR, SET_COURSE, CLEAR_COURSE } from '../actions/action_getAllData';

const initState = {
    data: [],
    year: 0,
    course: ''
};

export default function(state = initState, action) {
    switch (action.type) {
        case FETCH_STUDENTDATA:
            const { data } = action.payload;
            let normalizeData = [];
            data.forEach(item => {
                normalizeData.push(item);
            });
            return { ...state, data: normalizeData };
        case SET_YEAR:
            console.log({ ...state, year: action.year });
            return { ...state, year: action.year };
        case CLEAR_YEAR:
            return { ...state, year: 0 };
        case SET_COURSE:
            return { ...state, course: action.course };
        case CLEAR_COURSE:
            return { ...state, course: '' };
        default:
            return state;
    }
}
