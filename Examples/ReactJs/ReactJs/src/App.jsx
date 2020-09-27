import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HelloWorld } from './HelloWorld';
import { HelloWithName } from './HelloWithName';
import { StateExample } from './StateExample';
import { VirtualDom } from './VirtualDom';
import { Home } from './Home';
import { Fetch } from './Fetch/Fetch';
import { GetInputVal } from './GetInputVal';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <div>
        <Route path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/hellowithname" render={(routeProps) => ( <HelloWithName name="TRA" /> )} />
        <Route path="/stateexample" component={StateExample} />
        <Route path="/virtualdom" component={VirtualDom} />
        <Route path="/fetch" component={Fetch} />
        <Route path="/getinputval" component={GetInputVal} />
      </div>
    </Router>
  );
}

export default App;
