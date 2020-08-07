import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { V6 } from "./components/V6";
import { V7 } from "./components/V7";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/v6">
                    <V6 />
                </Route>
                <Route>
                    <V7 />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
