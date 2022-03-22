import React from "react";
import "./App.scss";

import {BrowserRouter} from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <div>
       <BrowserRouter>
           <Router/>
       </BrowserRouter>
    </div>
  );
}

export default App;
