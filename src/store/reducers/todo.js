import _ from 'underscore';
import { handleActions } from 'redux-actions';

import actions from '../actions/todo';


let defaultState = [];

export default handleActions({
    [actions.todoAdd](state, { payload }) {
        return state.concat(payload);
    },

    [actions.todoRemove](state, { payload: { id } }) {
        return _.reject(state, item => item.id === id);
    },

    [actions.todoDone](state, { payload: { id } }) {
        return state.map(item => {
                    if (item.id === id) {
                        return { ...item, done: true };
                    }

                    return item;
                });
    }
}, defaultState);