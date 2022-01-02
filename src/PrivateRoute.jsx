import React from "react";
import { Route, Navigate } from 'react-router-dom';
import { useSelector} from "react-redux";
// export { PrivateRoute };

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLogin = useSelector(state => state.isLogin);

    return (
        <Route {...rest} render={props => {
            if (!isLogin) {
                // not logged in so redirect to login page with the return url
                return <Navigate to="/login" state={{ from: props.location }}/>
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
};

export default PrivateRoute;