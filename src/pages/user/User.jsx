import React from 'react';
import "./user.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarToday from "@material-ui/icons/CalendarToday";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="../img/admin-avatar.jpeg" alt="test-img" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Monika Vaghasiya</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowTitle">Account Details</div>
                        <div className="userShowInfo">
                            <PermIdentityIcon/>
                            <span className="userShowInfoTitle">MONIkscsr56w37</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday/>
                            <span className="userShowInfoTitle">21.12.1994</span>
                        </div>
                        <div className="userShowInfo">
                            <ContactPhoneIcon/>
                            <span className="userShowInfoTitle">+91 7096851041</span>
                        </div>
                        <div className="userShowInfo">
                            <EmailIcon/>
                            <span className="userShowInfoTitle">monika@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <HomeIcon/>
                            <span className="userShowInfoTitle">Pune | India</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="MOniksxbchd" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder="Monika Vaghasiya" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="monika@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone no</label>
                                <input type="text" placeholder="+91 7096851041" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="Pune | Maharastra" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="../img/admin-avatar.jpeg" alt="" className="userUpdateImg"/>
                                <label htmlFor="file"> <PublishIcon className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;