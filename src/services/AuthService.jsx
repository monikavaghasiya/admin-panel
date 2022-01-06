import axiosInstance from "../axios";
import { useSelector, useDispatch } from "react-redux";
// import {updateAuthUserDetail, failUpdateAuthUserDetail} from "../redux/auth/loginAction";

const GetUser = () => {
    const token = useSelector(state => state.token);
    const user = useSelector(state => state.user);
    // const dispatch = useDispatch();

    if (token !== '' && (typeof user === "undefined" || user.length === 0)) {

        let headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        };

        console.log("get user called");

        axiosInstance.get('/auth-user', headers)
            .then(response => {
                // dispatch(updateAuthUserDetail(response.data.data.user));
                console.log("success", response.data)
            })
            .catch(function (error) {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log("error", resMessage)
                // dispatch(failUpdateAuthUserDetail(resMessage));

            });
    }
};

export default GetUser;