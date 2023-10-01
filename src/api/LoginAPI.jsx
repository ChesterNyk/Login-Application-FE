import {postRequest } from "./APIUtils";

export const userLogin = (next, param) => {
    postRequest('/login', next, param)
}