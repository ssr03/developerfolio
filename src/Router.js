import React from "react";

import {Route, Routes} from "react-router-dom";
import Main from "./containers/Main";
import Detail from "./containers/detail/Detail";

const Router = () => {
    return(
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/project/:fileName"  element={<Detail/>}/>
            </Routes>
    )
}

export default Router;
