import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./member/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
}
export default AppRouter;