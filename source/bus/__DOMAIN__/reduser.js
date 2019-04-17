// types
import { types } from './types';
import { actions } from 'react-redux-form';

const initialState = {};

export const reduser = (state = initialState, action) => {
    switch (action.type) {
        case types.TYPE:
            return state;

        default:
            return state;
    }
};
