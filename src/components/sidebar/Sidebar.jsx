import React from 'react';
import "./sidebar.css";
import { NavLink as Link, useLocation } from 'react-router-dom';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, Feedback, Forum, WorkOutline, BugReport } from "@material-ui/icons";

const Sidebar = () => {

    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle/>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            <Link to="/analytics">Analytics</Link>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon"/>
                            <Link to="/users">Users</Link>
                        </li>
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Forum className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BugReport className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;