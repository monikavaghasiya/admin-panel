import React, {useEffect, useState} from 'react';
import axiosInstance from "../axios";

const API_URL = "http://local.admin-panel/api/";

export const AuthService = () => {
    const [user, setUser] = useState();

    function logout () {
        localStorage.removeItem("token");
    }

    function login(data) {
        return axiosInstance
            .post(API_URL + "login", data)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("token", JSON.stringify(response.data.access_token));
                }

                setUser(response.data.user);

                return response.data;
            });
    }

    function getCurrentUser() {
        return user;
    }

    function register(data) {
        return axiosInstance.post(API_URL + "register", data);
    }
};

export default AuthService;