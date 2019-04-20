// Types
import { types } from './types';

// Instruments
import { api } from '../../REST';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    types.CREATE_POSTS,
            payload: post,
        };
    },
    fetchPostsAsync: (posts) => {
        return{
            type: types.FETCH_POSTS_ASYNC,
        };

        // const response = await api.posts.fetch();
        // const result = await response.json();

        // dispatch(postsActions.fillPosts(posts));
    },

    createPostAsync: (comment) => {
        return{
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };

    },
};
