import React from 'react';
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Login from "./pages/Login/Login";
import {useSelector} from "react-redux";

function App() {
    const isLogin = useSelector(state => state.isLogin);

    return (
        <Router>
            {isLogin && ( <TopBar/> )}
            <div className="container">
                {isLogin && ( <Sidebar/> )}
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    {isLogin && (
                        <>
                        <Route exact path="/" element={!isLogin ? <Navigate to="/login" /> : Home}/>
                        <Route path="/users" element={!isLogin ? <Navigate to="/login" /> : UserList}/>
                        <Route path="/user/:userId" element={!isLogin ? <Navigate to="/login" /> : User}/>
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
