// Core
import { put, apply} from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/action';

export function* fetchPosts () {
    yield console.log('-> worker fetchPosts');
    try {
        yield put(uiActions.startFeching());
        
        const response = yield apply(api, api.posts.fetch);
        const {data: posts, message} = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fillPosts(posts));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchPosts worker'));
    } finally {
        yield put(uiActions.stopFeching());
    }
    
    
}