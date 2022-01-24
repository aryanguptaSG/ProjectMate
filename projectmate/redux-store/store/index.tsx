import { createStore , applyMiddleware} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import authReducers from "../reducers/authReducers";
import watchAllAuth from "../sagas/watcherSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(authReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    );


sagaMiddleware.run(watchAllAuth);

export default store;