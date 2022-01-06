import React from 'react';
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Login from "./pages/Login/Login";
import NotFound from "./pages/error/NotFound";
import {useSelector} from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PrimarySearchAppBar from "./components/topbar/AppBar";

function App() {
    const isLogin = useSelector(state => state.isLogin);

    return (
        <BrowserRouter>
            {isLogin && ( <PrimarySearchAppBar/> )}
            {isLogin && ( <TopBar/> )}
            <div className="container">
                {isLogin && ( <Sidebar/> )}
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/users" componentToRender={<UserList/>} />
                    <PrivateRoute path="/" componentToRender={<Home/>} exact/>
                    <PrivateRoute path="/user/:userId" componentToRender={<User/>} />
                    {/*<Route path="/" element={<PrivateRoute element={<Home />} />}/>
                    <Route path="users" element={<PrivateRoute element={<UserList />} />}/>
                    <Route path="users/:userId" element={<PrivateRoute element={<User />} />}/>
                    these type of route used in V6*/}
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
