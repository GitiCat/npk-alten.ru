import {combineReducers} from "redux";
import LanguageReducer from "./reducers-language";
import HomeReducer from "./home-reducers";

const allReducers = combineReducers({
    LanguageReducer,
    HomeReducer
});

export default allReducers;