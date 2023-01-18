import React from 'react';
import { Route, Routes } from "react-router-dom";
import Error from './container/error/error.view';
import Home from './container/home/home.view';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route render={() => <Error errorcode={"ERROR [404]"} info={"Page Not Found!"} />} />
    </Routes>
  );
}

export default App;
