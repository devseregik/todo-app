import * as ACTIONS from '../actions/todo';
import _ from 'underscore';

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case ACTIONS.TODO_ADD:
            return state.concat(action.payload);

        case ACTIONS.TODO_REMOVE:
            return _.reject(state, item => item.id === action.payload.id);

        case ACTIONS.TODO_DONE:
            return _.chain(state)
                    .map(item => {
                        if (item.id === action.payload.id) {
                            return { ...item, done: true };
                        }
                        
                        return item;
                    })
                    .value();
        default:
            return state;
    }
};