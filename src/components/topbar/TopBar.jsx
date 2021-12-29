import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons"

const TopBar = () => {
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
                  <img src="/img/admin-avatar.jpeg" alt="" className="topAvatar"/>
              </div>
          </div>
        </div>
    );
};

export default TopBar;