import { createAction } from 'redux-actions';
import _ from 'underscore';

/**
 * Action to add a todo.
 */
const TODO_ADD = 'TODO_ADD';

/**
 * Action to mark todo as done.
 */
const TODO_DONE = 'TODO_DONE';

/**
 * Action to remove todo from list.
 */
const TODO_REMOVE = 'TODO_REMOVE';

/**
 * Prefix for unique ID by todo item.
 */
const ID_PREFIX = 'todo_';


export const todoAdd = createAction(TODO_ADD, 
    value => ({ 
        id: _.uniqueId(ID_PREFIX),
        value, 
        done: false 
    })
);

export const todoRemove = createAction(TODO_REMOVE, id => ({ id }));

export const todoDone = createAction(TODO_DONE, id => ({ id }));

export default { todoAdd, todoRemove, todoDone };