import "./style.scss"
import allReducers from "./reducers";

import React from 'react'
import ReactDom from 'react-dom'
import App from "./containers/App";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(allReducers);
const rootElement = document.getElementById('root');

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
, rootElement)