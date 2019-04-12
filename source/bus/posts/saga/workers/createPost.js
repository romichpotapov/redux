// Core
import { put, apply} from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { createPost as createPostAC } from '../../actions';

export function* createPost () {
    yield console.log('→ create Post SAGA');


    await api.posts.create(comment);

    dispatch(createPostAC());
}