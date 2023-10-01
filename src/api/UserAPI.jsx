import {getRequest } from "./APIUtils";

export const getUserList = (next, param) => {
    getRequest('/allUsers', next, param)
}