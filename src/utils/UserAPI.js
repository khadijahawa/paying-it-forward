import axios from 'axios';
import { toast } from 'react-toastify';

import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
} from './userSlice';

const showErrorMessage = (error) => {
    // error message is in arrray or direct value in BE.
    let errorMessage = error.response.data[0]
        ? error.response.data[0].msg
        : error.response.data.message;

    errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
    });
};

const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        await axios.post(`${process.env.REACT_APP_API_URI}/auth/signin`, user, {
            withCredentials: true,
        });
        dispatch(loginSuccess());
    } catch (error) {
        showErrorMessage(error);
        dispatch(loginFailure());
    }
};

const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URI}/auth/signup`,
            user,
        );
        dispatch(registerSuccess(res.data));
    } catch (error) {
        showErrorMessage(error);
        dispatch(registerFailure());
    }
};
export { login, register };
