import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons"
import {useDispatch, useSelector} from "react-redux";
import { setLogout } from "../../redux/auth/loginAction";
// import GetUser from "../../services/AuthService";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { NavLink as Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";

const TopBar = () => {
    const authUser = useSelector(state => state.user);
    const isLoggedIn = useSelector(state => state.isLogin);
    const dispatch = useDispatch();
    const history = useHistory();
    let button;

    // if (typeof authUser === "undefined" || authUser.length === 0) {
    //     GetUser();
    // }

    const handleLogout = () => {
        dispatch(setLogout());
        history.push("/login");
    };

    if (isLoggedIn) {
        button = <Button variant="contained" onClick={handleLogout}>Logout</Button>;
    } else {
        button = <Link to="/login"><Button variant="contained">Login</Button></Link>;
    }

    return (
        <div className="topBar">
          <div className="topBarWrapper">
              <div className="topLeft">
                  <div className="logo">Admin Panel</div>
              </div>
              <div className="topRight">
                  <div className="topBarIconContainer">
                      <NotificationsNone/>
                      <span className="topIconBag">2</span>
                  </div>
                  <div className="topBarIconContainer">
                      <Language/>
                  </div>
                  <div className="topBarIconContainer">
                      <Settings/>
                  </div>
                  <div className="topBarIconContainer">
                      {button}
                  </div>
                  <Avatar alt="Monika Sanghani" src={(authUser && authUser.length > 0) ? "/img/dummy-user.png" : "/img/admin-avatar.jpeg" }/>
              </div>
          </div>
        </div>
    );
};

export default TopBar;