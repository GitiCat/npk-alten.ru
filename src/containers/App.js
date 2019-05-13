import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderComponent from "../components/blocks/header/header";
import FooterComponent from "../components/blocks/footer/footer";
import ErrorBoundary from "./error-boundary";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown,
        faHeadset} 
    from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faHeadset);

const Home = lazy(() => import('../components/pages/home/home'));
const History = lazy(() => import('../components/pages/history/history'));
const Activity = lazy(() => import('../components/pages/activity/activity'));
const Productions = lazy(() => import('../components/pages/productions/productions'));
const Documents = lazy(() => import('../components/pages/documents/documents'));

class App extends Component {
    render() {
        return(
            <Router>
                <HeaderComponent/>
                <article className='content' id='content'>
                    <ErrorBoundary>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/history' component={History}/>
                                <Route path='/activity' component={Activity}/>
                                <Route path='/production' component={Productions}/>
                                <Route path='/documents' component={Documents}/>
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                </article>
                <FooterComponent/>
            </Router>
        );
    }
}

export default App;