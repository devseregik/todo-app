import { compose, createStore } from 'redux';

import todoReducer from './reducers/todo';

var store = createStore(
    todoReducer, 
    compose(process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;