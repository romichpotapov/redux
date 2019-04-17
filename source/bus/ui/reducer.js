// Core
import { Map } from 'immutable';
// types
import { types } from './types';

const initialState = Map({
    isFetching: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_FECHING:
            return state.set('isFetching', true);

        case types.STOP_FECHING:
            return state.set('isFetching', false);

        default:
            return state;
    }
};
