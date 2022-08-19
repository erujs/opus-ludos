import React from 'react';
import {Route, Switch} from "react-router-dom";
import Error from './container/error/error';
import Home from './container/home/home';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route render={() => <Error errorcode={"ERROR [404]"} info={"Page Not Found!"} />} />
    </Switch>
  );
}

export default App;
