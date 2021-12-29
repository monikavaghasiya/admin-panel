import React from 'react';
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="img/admin-avatar.jpeg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/admin-avatar.jpeg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/admin-avatar.jpeg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/admin-avatar.jpeg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/admin-avatar.jpeg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="img/admin-avatar.jpeg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;