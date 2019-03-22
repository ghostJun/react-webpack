import {createStore} from 'redux';
import {count_reducer} from './reducers/count_reducer';

const store = createStore(
    count_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
