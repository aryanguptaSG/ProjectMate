import { takeEvery , all} from "redux-saga/effects";
import actionTypes from "../actions/action-types";
import * as allFunctions from "./workerSaga";



function* signUp(){
    yield takeEvery(actionTypes.REQUESTEDSIGNUP,allFunctions.signUp);
    
}

function* signIn(){
    yield takeEvery(actionTypes.REQUESTEDSIGNIN,allFunctions.signIN);
}

function* signOut(){
    yield takeEvery(actionTypes.REQUESTEDSIGNOUT,allFunctions.signout);
}

export default function* watchAllAuth(){
    yield all([
        signUp(),
        signIn(),
        signOut()
    ])
}