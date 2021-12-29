import React from 'react';
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Routes ,
    Route
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <TopBar/>
      <div className="container">
          <Sidebar/>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route exact path="/" element={<Home/>} />
              <Route path="/users" element={<UserList/>} />
              <Route path="/user/:userId" element={<User/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
