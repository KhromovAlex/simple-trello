import { createStore } from 'redux';

import reducers from './reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
    reducers,
    reduxDevtools && reduxDevtools()
);

export default store;