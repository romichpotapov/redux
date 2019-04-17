// Core
import { put, apply} from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* createPost ({ payload: comment }) {
    try {
        yield put(uiActions.startFeching());

        const response = yield apply(api, api.posts.create, [comment]);
        const { data: post, message} = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.createPost(post));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createPosst worker'));
    } finally {
        yield put(uiActions.stopFeching());
    }
}