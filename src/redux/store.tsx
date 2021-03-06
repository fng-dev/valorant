import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './ducks';

let middleware: any;

if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
    middleware = applyMiddleware(thunkMiddleware);
}

// tslint:disable-next-line: typedef
export default function configureStore() {
    return createStore(reducers, middleware);
}
