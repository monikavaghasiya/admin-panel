import React from "react"
import {Redirect, useLocation} from "react-router-dom"
import { useSelector } from "react-redux";

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateRoute = (props) => {
    const isLogin = useSelector(state => state.isLogin);
    let location = useLocation();

    return isLogin ? (
        props.componentToRender
    ) : (
        <Redirect to="/login" state={{ from: location }} />
    )
};

export default PrivateRoute;