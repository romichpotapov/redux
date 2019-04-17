// Types
import { types } from './types';

export const uiActions = {
    startFeching: () => {
        return {
            type: types.START_FECHING,
        };
    },
    stopFeching: () => {
        return {
            type: types.STOP_FECHING,
        };
    },
    emitError: (error, meta = null) => {
        return {
            type:       types.EMIT_ERROR,
            payload:    error,
            error:      true,
            meta,
        };
    },

};
