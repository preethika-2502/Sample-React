import { Route,Routes } from "react-router";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function Approutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
}