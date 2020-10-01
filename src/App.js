import React from 'react';
import {Route, Switch} from "react-router-dom";
import AppErr from './AppErr';
import Library from './container/library/library';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Library} />
      <Route render={() => <AppErr errorcode={"[404] Page Not Found!"} />} />
    </Switch>
  );
}

export default App;
