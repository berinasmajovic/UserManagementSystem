import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER
});

const userAdded = () => ({
    type: types.ADD_USER
});

const userUpdated = () => ({
    type: types.UPDATE_USER
});

const getSingleUser = (user) => ({
    type: types.GET_USER,
    payload: user
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((response) => {
            dispatch(getUsers(response.data));
        }).catch(error => console.log(error));
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((response) => {
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch(error => console.log(error));
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user).then((response) => {
            dispatch(userAdded());
        }).catch(error => console.log(error));
    }
}

export const getUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((response) => {
            dispatch(getSingleUser(response.data));
        }).catch(error => console.log(error));
    }
}

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((response) => {
            dispatch(userUpdated());
        }).catch(error => console.log(error));
    }
}

